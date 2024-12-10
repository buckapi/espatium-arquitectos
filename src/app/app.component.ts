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
import { Inject, PLATFORM_ID } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { PriceComponent } from './components/price/price.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    ResourcesComponent,
    PriceComponent
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
    @Inject(PLATFORM_ID) private platformId: Object

  ) { }
  ngOnInit(): void {
    this.theme();

  }
  theme() {
    this.loadStyle.loadStyle('assets/css/plugins.css');
    this.loadStyle.loadStyle('assets/css/style.css');
    

    if (typeof document !== 'undefined') {
      this.scriptLoader
        .loadScripts([
        
          'assets/js/jquery-3.0.0.min.js',
          'assets/js/jquery-migrate-3.0.0.min.js',
          'assets/js/plugins.js',
          'assets/js/scripts.js',
        ])  
        .then((data) => {
          console.log('Todos los scripts se han cargado correctamente', data);
        })
        .catch((error) => console.error('Error al cargar los scripts', error));
    }

  }
}
