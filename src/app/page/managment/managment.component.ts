import { Component } from '@angular/core';
import {  MessageService } from 'primeng/api';
import { Router } from "@angular/router";
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css']
})

export class ManagmentComponent {
 


  constructor(
    private router: Router,
    private authService: AuthService,

  )
   {}


  


  
  




  

}
