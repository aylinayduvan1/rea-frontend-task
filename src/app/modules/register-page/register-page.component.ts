import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegisterRequest } from 'src/app/models/request/register-request.model';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationItem } from 'lottie-web';
declare let lottie: any;

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public registerRequest: RegisterRequest = <RegisterRequest>{};

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {}
  async register() {
    let status = await this.authService.register(this.registerRequest);

    if (status === ResponseStatus.Ok) {
      setTimeout(() => {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kaydınız başarıyla oluşturuldu.' });
      }, 3000); // 2 saniye beklet
      this.router.navigate(['/login']); // Giriş doğruysa /homepage'e yönlendir

    } else if (status === ResponseStatus.Invalid) {
      this.messageService.add({ severity: 'error', summary: 'Hatalı', detail: 'Geçersiz kayıt bilgileri.' });
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
