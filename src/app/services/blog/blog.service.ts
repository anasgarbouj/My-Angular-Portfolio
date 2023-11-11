import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
    private apiUrl = environment.apiUrl + '/blog';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Adjust this according to how you store the token
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<{success: boolean, data: Blog[]}>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }
  getAcceptedBlogs(): Observable<Blog[]> {
    return this.http.get<{success: boolean, data: Blog[]}>(`${this.apiUrl}/accepted`).pipe(
      map(response => response.data)
    );
  }

  getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }

  createBlog(blog: Blog): Observable<Blog> {
    const headers = this.getHeaders();
    return this.http.post<Blog>(this.apiUrl, blog, { headers });
  }

  updateBlog(id: string, blog: Blog): Observable<Blog> {
    const headers = this.getHeaders();
    return this.http.put<Blog>(`${this.apiUrl}/${id}`, blog, { headers });
  }

  deleteBlog(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }

  approveBlog(id: string): Observable<Blog> {
    const headers = this.getHeaders();
    return this.http.put<Blog>(`${this.apiUrl}/approve/${id}`, {}, { headers });
  }

  // Add other necessary methods here
}
