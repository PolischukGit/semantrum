import { Component } from '@angular/core';
import { InsteadNgrxLoadingSelectorService } from './services/instead-ngrx-loading-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .preloader-wrapper {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99;
      background-color: rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class AppComponent {
  constructor(public loadingService: InsteadNgrxLoadingSelectorService) {
    this.loadingService.loading$.next(true);
  }
}
