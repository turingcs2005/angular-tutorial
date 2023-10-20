import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-another-dude',
  templateUrl: './another-dude.component.html',
  styleUrls: ['./another-dude.component.scss']
})
export class AnotherDudeComponent {
  constructor(
    public globalService: GlobalService
  ) {}
}
