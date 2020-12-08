import { Component } from '@angular/core';
import { InsteadNgrxLoadingSelectorService } from '../../../../services/instead-ngrx-loading-selector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styles: [`
    .example-container {
      width: 100%;
      height: 100vh;
    }
    .nav-wrapper {
      margin: 20px 0;
    }
    .nav-item {
      padding: 20px;
      text-transform: uppercase;
      text-align: center;
      cursor: pointer;
      outline: none;
    }
    .nav-item.active {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `]
})
export class FirstPageComponent {
  constructor(
    private loadingService: InsteadNgrxLoadingSelectorService
  ) {
  }

  goTo(): void {
    this.loadingService.loading$.next(true);
  }
}
