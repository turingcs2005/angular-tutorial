import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  
  globalServiceCounter: number;

  constructor() {
    this.globalServiceCounter = 0;
    console.log('%c CountService instantiated!', 'color: green');
  }
}
