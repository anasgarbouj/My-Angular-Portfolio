import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Blog } from '../models/blog.model';
import { BlogService } from '../services/blog/blog.service';
import { CommentService } from '../services/comment/comment.service';
import { Comment } from '../models/comment.model';
import { UserService } from '../services/auth/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-portfolio',
  templateUrl: './manage-portfolio.component.html',
  styleUrls: ['./manage-portfolio.component.css']
})
export class ManagePortfolioComponent implements OnInit {
  blogs: Blog[] = [];
  comments: Comment[] = [];
  showModal: boolean = false;
  showCommentsModal: boolean = false;
  showConfirmationModal: boolean = false;
  selectedBlog: Blog | null = null;
  selectedBlogId: string | null = null;
  user: User | null = null;
  editBlogData: Blog | null = null;
  selectedCommentId: string | null = null;
  showDeleteConfirmation: boolean = false;
  showStatusUpdatePopup: boolean = false;
  notificationMessage: string = '';
  newBlogData = {
    title: '',
    content: '',
    author: ''
  };



  constructor(
    private blogService: BlogService,
    private commentService: CommentService,
    private userService: UserService,
    private router : Router
  ) {{
    this.setAuthor();
  }}

  ngOnInit(): void {
    this.loadBlogs();
  }
  setAuthor(): void {
    const userIdAndRole = this.userService.getCurrentUserIdAndRole();
    if (userIdAndRole) {
      this.newBlogData.author = userIdAndRole.id;
    }
  }
  createBlog(): void {
    if (!this.newBlogData.author) {
      alert('No author identified. Please log in.');
      return;
    }

    this.blogService.createBlog(new Blog(
      '',
      this.newBlogData.title,
      this.newBlogData.content,
      this.newBlogData.author,
      [],
      'pending'
    )).subscribe(
      (response) => {
        alert('Successfully created a blog');
      },
      (error) => {
        console.error('Error creating blog', error);
      }
    );
  }

  logout(): void {
    // Remove the token from local storage
    localStorage.removeItem('token'); // Replace 'token' with the actual key you use

    // Redirect to the login page
    this.router.navigate(['/login']); // Adjust this path based on your routing setup
  }

  loadBlogs(): void {
    this.blogService.getAllBlogs().subscribe(
      (blogs) => {
        this.blogs = blogs;
      },
      (error) => {
        console.error('Error fetching blogs', error);
      }
    );
  }

  deleteBlog(blogId: string): void {
    this.blogService.deleteBlog(blogId).subscribe(
      () => {
        this.blogs = this.blogs.filter(blog => blog._id !== blogId);
        this.showConfirmationModal = false;
      },
      (error) => {
        console.error('Error deleting blog', error);
      }
    );
  }

  openUpdateModal(blog: Blog): void {
    this.selectedBlog = blog;
    this.editBlogData = { ...blog }; // Clone the blog data
    this.loadUserDetails(blog.author);
    this.showModal = true;
  }

  closeUpdateModal(): void {
    this.showModal = false;
  }

  updateBlog(): void {
    if (!this.editBlogData || !this.selectedBlog?._id) {
      console.error('No blog data available for update');
      return;
    }

    // Set updatedAt to current time before sending the update
    this.editBlogData.updatedAt = new Date();

    this.blogService.updateBlog(this.selectedBlog._id, this.editBlogData).subscribe(
      () => {
        this.loadBlogs();
        this.closeUpdateModal();
      },
      error => {
        console.error('Error updating blog', error);
      }
    );
  }

  confirmDelete(blogId: string): void {
    this.showConfirmationModal = true;
    this.selectedBlogId = blogId;
  }

  onConfirmDeletion(): void {
    if (this.selectedBlogId) {
      this.deleteBlog(this.selectedBlogId);
      this.selectedBlogId = null;
    }
  }

  onCancelDeletion(): void {
    this.showConfirmationModal = false;
    this.selectedBlogId = null;
  }

  loadUserDetails(authorId: string) {
    this.userService.getUserById(authorId).subscribe(
      user => {
        this.user = user;
      },
      error => {
        console.error('Error fetching user details', error);
        this.user = null;
      }
    );
  }

  openCommentsModal(blog: Blog): void {
    this.selectedBlog = blog;
    this.commentService.getCommentsForBlog(blog._id)
      .subscribe(
        response => {
          this.comments = response.data;
          this.showCommentsModal = true;
        },
        error => console.error('Error fetching comments:', error)
      );
  }

  updateCommentStatus(comment: Comment): void {
    console.log('Updating status for comment ID:', comment._id); // Add this line for debugging

    this.commentService.updateCommentStatus(comment._id, comment.status)
      .subscribe(
        updatedComment => {
          const index = this.comments.findIndex(c => c._id === updatedComment._id);
          if (index !== -1) {
            this.comments[index] = updatedComment;
          }
          this.showStatusUpdatePopup = true;
          this.notificationMessage = "Status updated successfully!";

          setTimeout(() => this.showStatusUpdatePopup = false, 3000);
        },
        error => console.error('Error updating comment status:', error)
      );
  }
  confirmDeleteComment(commentId: string): void {
    this.selectedCommentId = commentId;
    this.showDeleteConfirmation = true;
  }
  deleteComment(): void {
    if (!this.selectedCommentId) {
      console.error('No comment selected for deletion');
      return;
    }
  
    this.commentService.deleteComment(this.selectedCommentId).subscribe(
      () => {
        this.comments = this.comments.filter(comment => comment._id !== this.selectedCommentId);
        this.selectedCommentId = null;
        this.showDeleteConfirmation = false; // Close the confirmation modal
        // Set the message for the notification popup
        this.notificationMessage = "Comment deleted successfully!";
        this.showStatusUpdatePopup = true;
        setTimeout(() => this.showStatusUpdatePopup = false, 3000); // Hide after 3 seconds
      },
      error => {
        console.error('Error deleting comment', error);
        // Optionally, display an error notification
      }
    );
  }

  // Add any other methods or logic needed for the component
}
