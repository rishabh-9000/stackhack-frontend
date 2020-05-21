import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'stackhack-frontend';
  sideNavMode = 'side';
  sideNavOpened = true;
  windowWidth: number;

  @ViewChild('sideNavRef') sideNavRef: MatSidenav;

  constructor(private router: Router) {}

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 850) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;

      return;
    }

    this.sideNavMode = 'side';
    this.sideNavOpened = true;

    return;
  }

  openSideNav() {
    this.sideNavRef.toggle();
  }

  sideNavItemClick(route: string) {
    this.router.navigate([`/${route}`]);
    if (this.windowWidth <= 850) {
      this.sideNavRef.toggle();
    }
  }
}
