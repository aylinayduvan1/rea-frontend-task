import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth/auth.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api/api.service';




@Component({
  selector: 'app-panelmenu',
  templateUrl: './panelmenu.component.html',
  styleUrls: ['./panelmenu.component.css']
})
export class PanelmenuComponent {
  sidebarVisible: boolean = true;

  isSidebarOpen: boolean = false;
  currentUser: User | null;
  users:User[] = []


  refresh() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data;
      console.log('Kullanıcılar:', this.users); // Eklendi
    });
  }

  ngOnInit() {
    this.refresh();
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }


  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private readonly apiService: ApiService, 

  )
   {this.currentUser = null;}



  logOut(): void {
    // AuthService içindeki logout() metodunu çağırarak çıkış işlemini gerçekleştirin
    this.authService.logOut();
    this.router.navigate(['/login']); 

  }
 
}




