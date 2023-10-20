import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiRoutingModule } from './di-routing.module';
import { DiComponent } from './di.component';
import { SharedModule } from '../shared/shared.module';
import { DudeComponent } from './dude/dude.component';
import { GlobalService } from 'src/app/services/global.service';
import { AnotherDudeComponent } from './another-dude/another-dude.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    DiComponent,
    DudeComponent,
    AnotherDudeComponent
  ],
  imports: [
    CommonModule,
    DiRoutingModule,
    SharedModule,
    MarkdownModule.forChild()
  ],
  exports: [
    DudeComponent
  ],
  providers: [
    GlobalService
  ]
})
export class DiModule { }
