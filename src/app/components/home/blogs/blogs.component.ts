import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog/blog.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { Comment } from 'src/app/models/comment.model';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Blog[];
  selectedBlog: Blog | null = null;
  comments: Comment[];
  @ViewChild('commentInput') commentInput: ElementRef;
  isAddingComment: boolean = false; 
  showNotification: boolean = false;
  missingName: boolean = false;
  missingContent: boolean = false;
  // New property to track comment submission state

  constructor(
    private blogService: BlogService,
    private commentService: CommentService,
    
  ) {}

  ngOnInit(): void {
    this.blogService.getAcceptedBlogs().subscribe(
      (blogs) => {
        this.blogs = blogs;
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
  selectBlog(blog: Blog): void {
    this.selectedBlog = blog;
    this.commentService.getCommentsForBlog(blog._id)
      .subscribe(
        response => {
          this.comments = response.data.filter(comment => comment.status === 'accepted');
        },
        error => {
          console.error('Error fetching comments:', error);
        }
      );
  }
  

  clearSelectedBlog(): void {
    console.log('Clearing selected blog');
    this.selectedBlog = null;
  }

  addComment(blogId: string, commentText: string, commenterName: string): void {
    this.isAddingComment = true;
    this.missingName = false;
    this.missingContent = false;

    // Check if name or content is missing
    if (!commenterName.trim()) {
      this.missingName = true;
      return;
    }
    if (!commentText.trim()) {
      this.missingContent = true;
      return;
    }
    this.commentService.createComment(commentText, commenterName, blogId).subscribe(
      (newComment) => {
        this.isAddingComment = false;
        this.commentInput.nativeElement.value = '';
        this.showNotification = true;
        setTimeout(() => this.showNotification = false, 3000); // Hide notification after 3 seconds
      },
      (error) => {
        console.error('Error adding comment:', error);
        this.isAddingComment = false;
      }
    );
  }

  
  
  

  // Other methods and logic for the component
}
