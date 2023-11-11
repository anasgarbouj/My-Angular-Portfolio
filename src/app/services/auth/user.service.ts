import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // Import 'of' here
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/models/user.model'; // Adjust this import according to your User model
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment'; // Import 'map' and 'catchError' here

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  // Sign up
  signUp(userData: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  // Sign in
  signIn(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, credentials);
  }

  // Get user by ID
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Update user
  updateUser(id: string, userData: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, userData);
  }

  isAdmin(): Observable<boolean> {
    const userIdAndRole = this.getCurrentUserIdAndRole();
    if (!userIdAndRole) {
      return of(false);
    }
    console.log(userIdAndRole);
  
    return this.fetchFullUserDetails(userIdAndRole.id).pipe(
      map((user: User) => user.role === 'admin'),
      catchError(() => of(false))
    );
  }
  // Delete user
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // List all users
  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Return true if token exists
  }

  getCurrentUserIdAndRole(): { id: string, role: string } | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const decoded: any = jwt_decode(token);
      return { id: decoded.id, role: decoded.role };
    } catch (error) {
      console.error('Token decoding failed', error);
      return null;
    }
  }

  fetchFullUserDetails(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${userId}`);
  }
}
