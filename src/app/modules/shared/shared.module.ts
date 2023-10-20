import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { NewDudeComponent } from './new-dude/new-dude.component';
import { GlobalService } from 'src/app/services/global.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NewDudeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    NewDudeComponent,
    HttpClientModule
  ],
  providers: [

  ]
})
export class SharedModule { }
