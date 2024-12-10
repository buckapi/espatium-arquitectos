import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { RealtimeProjectsService } from '../../services/realtime-projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor (
    public global: GlobalService,
    public realtimeProjects: RealtimeProjectsService
  ){
    this.realtimeProjects.projects$.subscribe((projects) => {
      console.log(projects);
    });
  }
}
