import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { ChartsModule } from './charts/charts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
