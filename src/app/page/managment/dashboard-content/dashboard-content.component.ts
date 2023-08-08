import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from "@angular/router";
import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/user.model';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { RegisterRequest} from 'src/app/models/request/register-request.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent {
  users:User[] = []
  public userRequest: RegisterRequest = <RegisterRequest>{};
  currentUser: User | null;

  searchName: string=''
  modalOpen: boolean = false; //sayfa ilk açıldığında modal'ın kapalı kalması için false değer verdik


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



  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }



  modalOpenAdd: boolean = false;
  modalEdit: boolean = false ;
  openModalAdd() {
    this.modalOpenAdd = true;
  }
  
  closeModalAdd() {
    this.modalOpenAdd = false;
  }
  editModal(){
    this.modalEdit = false;
  }
  


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

 

    onUpdate(id: number, usersAdvert: User) {
      this.update(id, usersAdvert).then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.refresh();
          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'ilan güncelleme başarılı', life: 3000 });
          this.hideDialog(); // Güncelleme işlemi tamamlandığında dialogu gizle
        }
      }).catch((error) => {
        console.error('ilan güncellenirken bir hata oluştu:', error);
      });
    }
  
  
    update(id: number, usersAdvert: User) {
      return this.apiService.updateEntity(id, usersAdvert, User);
    }



    // Eksik olan isLoggedIn() metodu AuthService'den alınarak buraya ekleniyor.
    isLoggedIn(): boolean {
      return this.authService.isLoggedIn();
    }
  
    ngOnInit():void {

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




     onDelete(id: number) {
      this.delete(id).then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.refresh();
          this.modalOpen=false
          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı başarı ile silindi', life: 3000 });
        }
      });
    }
  
    delete(id: number) {
      return this.apiService.deleteEntity(id, User);
      
    }


    
}
