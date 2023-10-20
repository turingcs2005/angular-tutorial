import { Injectable } from '@angular/core';
import { CountService } from './count.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  dude: string;

  constructor(
    private countService: CountService
  ) {
    this.dude = 'Ryan';
    this.countService.globalServiceCounter += 1;
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
