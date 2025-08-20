import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router, NavigationEnd, Event as RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NgbModule,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  private static readonly REDIRECT_IDS: string[] = [
    'simple-slider',
    'range-slider',
    'styled-slider',
    'limited-slider',
    'limited-range-slider',
    'no-switching-range-slider',
    'push-range-slider',
    'selection-bar-slider',
    'selection-bar-at-end-slider',
    'selection-bar-from-value-slider',
    'selection-bar-gradient-slider',
    'dynamic-color-selection-bar-slider',
    'dynamic-pointer-color-slider',
    'stepped-slider',
    'right-to-left-slider',
    'floating-point-slider',
    'custom-display-function-slider',
    'custom-combine-labels-function-slider',
    'custom-html-display-function-slider',
    'alphabet-slider',
    'date-slider',
    'ticks-slider',
    'intermediate-ticks-slider',
    'custom-ticks-slider',
    'custom-ticks-legend-slider',
    'custom-legend-function-slider',
    'ticks-tooltips-slider',
    'ticks-custom-tooltips-slider',
    'ticks-values-tooltips-slider',
    'ticks-values-range-slider',
    'intermediate-ticks-values-range-slider',
    'dynamic-tick-color-slider',
    'log-scale-slider',
    'custom-scale-slider',
    'draggable-range-slider',
    'draggable-range-only-slider',
    'disabled-slider',
    'read-only-slider',
    'vertical-sliders',
    'user-events-slider',
    'manual-refresh-slider'
  ];

  @HostBinding('class.test-mode')
  testMode: boolean = false;

  private queryParamsSub: any;
  private fragmentSub: any;
  private eventsSub: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.queryParamsSub = this.route.queryParams.subscribe((params: any): void => {
      this.testMode = params['testMode'] === 'true';
    });

    // Provide redirects for old site links
    this.fragmentSub = this.route.fragment.subscribe((fragment: string | null) => {
      if (
        fragment !== null &&
        this.route.snapshot.url.length === 0 &&
        AppComponent.REDIRECT_IDS.indexOf(fragment) !== -1
      ) {
        this.router.navigateByUrl('/demos#' + fragment);
      }
    });

    this.eventsSub = this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        const { fragment } = this.router.parseUrl(this.router.url);
        if (fragment !== undefined && fragment !== null) {
          const element: Element | null = document.querySelector(`#${fragment}`);
          if (element !== undefined && element !== null) {
            element.scrollIntoView();
          }
        } else {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.queryParamsSub.unsubscribe();
    this.fragmentSub.unsubscribe();
    this.eventsSub.unsubscribe();
  }
}
