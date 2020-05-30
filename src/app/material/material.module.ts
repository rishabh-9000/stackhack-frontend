import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

const modules = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatStepperModule,
  MatSelectModule,
  MatTooltipModule,
  MatTabsModule,
  MatExpansionModule,
];

@NgModule({
  exports: [modules],
  imports: [modules],
})
export class MaterialModule {}
