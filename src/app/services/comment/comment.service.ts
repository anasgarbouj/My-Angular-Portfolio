import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment.model'; // Adjust the path as necessary
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
interface CommentResponse {
    success: boolean;
    data: Comment[];
  }
@Injectable({
  providedIn: 'root'
})
export class CommentService {
    private apiUrl = environment.apiUrl + '/comments';

  constructor(private http: HttpClient) {}
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
  createComment(content: string, name: string, blogId: string): Observable<Comment> {
   
    return this.http.post<Comment>(this.apiUrl, { content, name, blogId });
  }

  getCommentsForBlog(blogId: string): Observable<CommentResponse> {
    return this.http.get<CommentResponse>(`${this.apiUrl}/for-blog/${blogId}`);
  }

  updateCommentStatus(commentId: string, status: string): Observable<Comment> {
    const headers = this.getHeaders();
    return this.http.put<Comment>(`${this.apiUrl}/approve/${commentId}`, { status }, { headers });
  }


  deleteComment(commentId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiUrl}/${commentId}`, { headers });
  }

  // Add other methods as needed
}
