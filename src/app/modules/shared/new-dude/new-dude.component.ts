import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-new-dude',
  templateUrl: './new-dude.component.html',
  styleUrls: ['./new-dude.component.scss'],
  providers: [ ]
})
export class NewDudeComponent {
  constructor(
    public globalService: GlobalService
  ) {}
}
