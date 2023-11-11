export interface Comment {
    _id?: string;
    content: string;
    name: string;
    blog: string;
    status: string; // Include status to check if it's approved
    createdAt?: Date;
  }
  