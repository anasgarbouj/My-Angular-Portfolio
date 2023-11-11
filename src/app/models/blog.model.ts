export class Blog {
    constructor(
      public _id: string,
      public title: string,
      public content: string,
      public author: string,
      public comments: Comment[], // Assuming Comment is another model
      public status: 'pending' | 'accepted' | 'rejected',
      public createdAt?: Date,
      public updatedAt?: Date
    ) {}
  }
  