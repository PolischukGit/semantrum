import { Component } from '@angular/core';
import { InsteadNgrxLoadingSelectorService } from '../../../../services/instead-ngrx-loading-selector.service';

@Component({
  selector: 'app-first-page-second-part',
  templateUrl: './first-page-second-part.component.html',
  styles: [`
    .second-wrapper {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      text-transform: uppercase;
      color: green;
      font-size: 30px;
    }
  `]
})
export class FirstPageSecondPartComponent {
  constructor(
    loadingService: InsteadNgrxLoadingSelectorService
  ) {
    loadingService.loading$.next(false);
  }
}
