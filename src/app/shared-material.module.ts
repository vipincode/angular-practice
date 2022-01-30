import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SharedMaterialModule { }
