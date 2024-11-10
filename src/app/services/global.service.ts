import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  activeRoute = 'home';

  constructor() { }
  setRoute(route: string) {
    this.activeRoute = route;
    window.scrollTo(0, 0);
  }
}