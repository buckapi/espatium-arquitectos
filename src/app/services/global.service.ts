import { Injectable } from '@angular/core';
import { RealtimeProjectsService } from './realtime-projects.service';

interface Project {
  // Define aquí las propiedades de tu proyecto
  id?: number;
  title?: string;
  description?: string;
  files?: string[]; 
  type?: string;  
  created?: string;
  updated?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  activeRoute = 'home';
  projectSelected: any = {};
  projects: any [] = [];


  constructor(
    public realtimeprojects: RealtimeProjectsService
  ) { }
  setRoute(route: string) {
    this.activeRoute = route;
    window.scrollTo(0, 0);
  }
  viewProject(project: any) {
    this.projectSelected = project;
    this.activeRoute = 'projectsdetails';
  }
  getProjects() {
    return this.realtimeprojects.projects$;
  }
}

