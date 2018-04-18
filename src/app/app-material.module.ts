import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatGridListModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule {}
