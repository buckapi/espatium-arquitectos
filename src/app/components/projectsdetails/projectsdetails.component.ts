import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectsdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectsdetails.component.html',
  styleUrl: './projectsdetails.component.css'
})
export class ProjectsdetailsComponent {
  constructor(public global: GlobalService) 
  {
    console.log(this.global.projectSelected);
  }
}
