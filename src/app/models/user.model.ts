export class User {
  id: number =0;
  email: string ='';
  userName: string ='';
  surName: string ='';
  gsm: string='';
  adress: string='';
  userType: UserType = 0;
}

export enum UserType {
  Admin,
  Student
}

