import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from "@angular/router";
import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/user.model';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { RegisterRequest} from 'src/app/models/request/register-request.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-my-profile-info',
  templateUrl: './my-profile-info.component.html',
  styleUrls: ['./my-profile-info.component.css']
})
export class MyProfileInfoComponent {
  
  currentUser: User | null;
  users:User[] = []

  constructor(
    private readonly apiService: ApiService, 
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService,

  )
   { this.currentUser = null;}

   refresh() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data;
      console.log('Kullanıcılar:', this.users); // Eklendi
    });
  }
   ngOnInit() {

    this.refresh();


    // Profil sayfası açıldığında, kullanıcının giriş yapmış olup olmadığını kontrol ediyoruz.
    if (!this.authService.isLoggedIn()) {
     // Kullanıcı giriş yapmamışsa, başka bir sayfaya yönlendirilebilirsiniz.
     // Örneğin:
     this.router.navigate(['/home']);
     console.log('Kullanıcı giriş yapmamış, profil sayfasına erişim engellendi.');
    }
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

 
   }



   //güncelleme
     //güncelleme 
     editDialog: boolean = false
     usersEdit: User | null = null;
   
       
     hideDialog() {
       this.editDialog = false;
     }
   
     closeEditModal() {
       this.editDialog = false;
     }
 
 
     
     openEditDialog(id: number) {
       this.apiService.getEntityById<User>(id, User).then((response) => {
         console.log(response?.data)
         if (response && response.data) {
           this.editDialog = true;
           this.usersEdit = response.data; 
         } else {
           console.error('İlan bulunamadı veya alınırken bir hata oluştu.');
         }
       }).catch((error) => {
         console.error('İlan alınırken bir hata oluştu:', error);
       });
     }
 
  
 
     onUpdate(id: number, updatedUser: User) {
       this.update(id, updatedUser).then(response => {
         if (response?.status == ResponseStatus.Ok) {
           this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'ilan güncelleme başarılı', life: 3000 });
           this.hideDialog(); // Güncelleme işlemi tamamlandığında dialogu gizle
           this.refresh();

         }
       }).catch((error) => {
         console.error('ilan güncellenirken bir hata oluştu:', error);
       });
     }
   
   
     update(id: number, updatedUser: User) {
       return this.apiService.updateEntity(id, updatedUser, User);
     }
   
}
