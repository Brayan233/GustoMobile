import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunautePage } from './communaute';

@NgModule({
  declarations: [
    CommunautePage,
  ],
  imports: [
    IonicPageModule.forChild(CommunautePage),
  ],
})
export class CommunautePageModule {}
