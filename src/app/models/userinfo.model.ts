
export class UserInfo {
  //tablodaki veriler
  id: number =0;
  email: string ='';
  userName: string ='';
  surName: string ='';
  schoolNumber: string='';
  schoolName: string='';
  className: string='';
  userType: UserType = 0;
}
export enum UserType {
  Admin,
  Student
}
