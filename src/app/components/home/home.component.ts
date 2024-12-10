import { Component } from '@angular/core';
import { RealtimeProjectsService } from '../../services/realtime-projects.service';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (public globalService: GlobalService,
    public realtimeProjects: RealtimeProjectsService
  )
  {
    this.globalService.getProjects().subscribe((projects) => {
      console.log(projects);
    });
  }

}
