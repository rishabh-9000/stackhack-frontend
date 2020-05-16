import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const modules = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  exports: [...modules],
  imports: [...modules],
})
export class MaterialModule {}
