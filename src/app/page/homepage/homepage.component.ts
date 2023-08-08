import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AnimationItem } from 'lottie-web';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(
    private authService: AuthService,
    private router: Router) {
  }


  // Eksik olan isLoggedIn() metodu AuthService'den alınarak buraya ekleniyor.
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


logOut(): void {
  // AuthService içindeki logout() metodunu çağırarak çıkış işlemini gerçekleştirin
  this.authService.logOut();
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
        path: 'assets/home-animation.json' // Animasyon dosyasının yolunu buraya göre ayarlayın
      });
  
    }





    //twit işlemleri
    
}
