import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

const modules = [MatButtonModule, MatSidenavModule, MatIconModule];

@NgModule({
  exports: [...modules],
  imports: [...modules],
})
export class MaterialModule {}
