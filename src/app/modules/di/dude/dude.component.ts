import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-dude',
  templateUrl: './dude.component.html',
  styleUrls: ['./dude.component.scss'],
  providers: [ GlobalService  ]
})
export class DudeComponent {

  constructor( public globalService: GlobalService ) {}

}
