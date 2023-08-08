import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    RadioButtonModule,
    PasswordModule,
    ToastModule,
    RouterModule.forChild(routes),

  ],
})
export class AuthModule {}
