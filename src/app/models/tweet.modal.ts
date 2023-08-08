import { User } from 'src/app/models/user.model';

export class Tweet {
    id: number =0;
    userId:number=1;
    content: string='';
    createdAt:string='';
    user:  User= new User;

  }