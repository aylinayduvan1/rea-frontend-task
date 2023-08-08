import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginRequest } from 'src/app/models/request/login-request.model';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AnimationItem } from 'lottie-web';
declare let lottie: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private messageService: MessageService
  ) {}
  public loginRequest: LoginRequest = <LoginRequest>{};


  async login() {
    let status = await this.authService.login(this.loginRequest);

    if (status === ResponseStatus.Ok) {
      await this.router.navigate(['']);
      setTimeout(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Giriş yaptınız..' });
        this.router.navigate(['/dashboard']); // Giriş doğruysa /homepage'e yönlendir
      }, 2000); // 2 saniye (2000 milisaniye) beklet
    } else if (status === ResponseStatus.Invalid) {
      this.loginRequest.Password = '';
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Kullanıcı adı veya şifre hatalı' });
    }
  }


  //animasyon
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  animation!: AnimationItem;

  ngOnInit() {
    this.initializeAnimation();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.destroy();
    }
  }

  initializeAnimation() {
    this.animation = (window as any).lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/welcome-animation.json' // Animasyon dosyasının yolunu buraya göre ayarlayın
    });

  }
}
