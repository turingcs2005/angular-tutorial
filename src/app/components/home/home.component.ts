import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    public globalService: GlobalService,
    public countService: CountService
  ) {}
}
