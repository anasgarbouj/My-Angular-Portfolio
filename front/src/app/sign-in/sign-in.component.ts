import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from "src/app/services/auth/user.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {
  userData = {
    email: '',
    password: ''
  };
  errorMessage = ''; // Add this line


  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.signIn(this.userData).subscribe({
      next: (response) => {
        // Store the token in local storage
        localStorage.setItem('token', response.token);
  
        // Get current user ID from the token
        const userInfo = this.userService.getCurrentUserIdAndRole();
        if (userInfo && userInfo.id) {
          // Fetch user details by ID
          this.userService.getUserById(userInfo.id).subscribe(user => {
            // Check if the user is an admin
            if (user.role === 'admin') {
              this.router.navigate(['/manage-portfolio']);
            } else {
              this.router.navigate(['/']);
            }
          }, error => {
            console.error('Failed to fetch user details', error);
            // Handle error, maybe navigate to login or show an error message
          });
        } else {
          console.error('User ID not found in token');
          // Handle error, maybe navigate to login or show an error message
        }
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = error.error.message; // Set the error message here
      }
    });
  }
  
}
