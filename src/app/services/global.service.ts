import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  dude: string;

  constructor() {
    this.dude = 'Ryan';
    console.log('%c GlobalService instantiated!', 'color: green');
  }

  toggleDude(): void {
    if (this.dude == 'Ryan') {
      this.dude = 'Matt';
    } else {
      this.dude = 'Ryan';
    }
  }
}
