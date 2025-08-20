import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';

import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    RouterLink,
    RouterLinkActive
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  navbarCollapsed: boolean = true;
  atRootUrl: boolean = false;
  atDocsUrl: boolean = false;
  urlSub: any;
  enableExternalImages: boolean = environment.enableExternalImages;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.urlSub = this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.atRootUrl = event.url === '/' || event.url === '/home';
          this.atDocsUrl = event.url.indexOf('/docs') === 0;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.urlSub.unsubscribe();
  }
}
