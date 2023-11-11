export class User {
    _id?: string; // Optional since it's assigned by the database
    name: string;
    email: string;
    password?: string; // Optional in responses from server
    role: string;
  
    constructor(name: string, email: string, role: string, password?: string) {
      this.name = name;
      this.email = email;
      this.role = role;
      if (password) {
        this.password = password;
      }
    }
  }
  