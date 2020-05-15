import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

const modules = [MatButtonModule, MatSidenavModule];

@NgModule({
  exports: [...modules],
  imports: [...modules],
})
export class MaterialModule {}
