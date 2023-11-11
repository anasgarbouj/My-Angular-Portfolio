import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/services/auth/user.service';
import { Router } from '@angular/router';
import Keyboard from "simple-keyboard";
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-sign-up',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    userData: User = {
        name: '',
        email: '',
        role: 'normal', // Set a default role or handle it accordingly
        password: ''
    };
    c_password: string = ''; // Confirmation password
    errorMessage: string = ''; // Variable to store the error message

      keyboard: Keyboard;
      value = "";
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
  }
  signUp() {
    // Check if passwords match
    if (this.userData.password !== this.c_password) {
      alert("Passwords do not match.");
      return;
    }

    // Sending data to the user service
    this.userService.signUp(this.userData).subscribe({
      next: (response) => {
        // Handle successful sign up
        console.log('Sign up successful', response);
        this.router.navigate(['/login']); // Redirecting to login page
      },
      error: (error) => {
        // Handle any errors here
        console.error('Sign up failed', error);
        this.errorMessage = error.error.message || 'Failed to sign up.';

      }
    });
  }

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      mergeDisplay: true,
      layoutName: "default",
      layout: {
        default: [
          "q w e r t y u i o p",
          "a s d f g h j k l",
          "{shift} z x c v b n m {backspace}",
          "{numbers} {space} {ent}"
        ],
        shift: [
          "Q W E R T Y U I O P",
          "A S D F G H J K L",
          "{shift} Z X C V B N M {backspace}",
          "{numbers} {space} {ent}"
        ],
        numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"]
      },
      display: {
        "{numbers}": "123",
        "{ent}": "return",
        "{escape}": "esc ⎋",
        "{tab}": "tab ⇥",
        "{backspace}": "⌫",
        "{capslock}": "caps lock ⇪",
        "{shift}": "⇧",
        "{controlleft}": "ctrl ⌃",
        "{controlright}": "ctrl ⌃",
        "{altleft}": "alt ⌥",
        "{altright}": "alt ⌥",
        "{metaleft}": "cmd ⌘",
        "{metaright}": "cmd ⌘",
        "{abc}": "ABC"
      }
      
    });
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

  handleNumbers() {
    let currentLayout = this.keyboard.options.layoutName;
    let numbersToggle = currentLayout !== "numbers" ? "numbers" : "default";

    this.keyboard.setOptions({
      layoutName: numbersToggle
    });
  }


}