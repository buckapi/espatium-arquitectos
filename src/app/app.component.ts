import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalService } from './services/global.service';
import { ScriptLoaderService } from './services/script-loader.service';
import { LoadStyleService } from './services/load-style.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'espatium';

  constructor(
    public global: GlobalService,
    public scriptLoader: ScriptLoaderService,
    public loadStyle: LoadStyleService,

  ) { }
  ngOnInit(): void {
    this.theme();

  }
  theme() {
    this.loadStyle.loadStyle('assets/css/bootstrap.min.css" rel="stylesheet');
    this.loadStyle.loadStyle('assets/css/line-awesome.min.css" rel="stylesheet');
    this.loadStyle.loadStyle('assets/css/fontAwesomePro.css" rel="stylesheet');
    this.loadStyle.loadStyle('assets/css/animate.css" rel="stylesheet');
    this.loadStyle.loadStyle('assets/css/owl.carousel.css" rel="stylesheet');
    this.loadStyle.loadStyle('assets/css/slick.css" rel="stylesheet');
    this.loadStyle.loadStyle('assets/css/backToTop.css" rel="stylesheet');
    this.loadStyle.loadStyle('assets/css/metismenu.css" rel="stylesheet');
    this.loadStyle.loadStyle('assets/css/style.css" rel="stylesheet');

    if (typeof document !== 'undefined') {
      this.scriptLoader
        .loadScripts([
          'assets/js/jquery-1.12.4.min.js',
          'assets/js/popper.min.js',
          'assets/js/bootstrap.min.js',
          'assets/js/wow.min.js',
          'assets/js/jquery.waypoints.min.js',
          'assets/js/jquery.counterup.min.js',
          'assets/js/owl.carousel.min.js',
          'assets/js/slick.min.js',
          'assets/js/backToTop.js',
          'assets/js/metismenu.js',
          'assets/js/gsap.min.js',
          'assets/js/gsap-scroll-to-plugin.js',
          'assets/js/SplitText.min.js',
          'assets/js/ScrollSmoother.min.js',
          'assets/js/ScrollTrigger.min.js',
          'assets/js/smoother-script.js',
          'assets/js/heading-animation.js',
          'assets/js/paragraph-animation.js',
          'assets/js/main.js',
        ])
        .then((data) => {
          console.log('Todos los scripts se han cargado correctamente', data);
        })
        .catch((error) => console.error('Error al cargar los scripts', error));
    }

  }
}
