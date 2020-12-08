import { Component } from '@angular/core';
import { InsteadNgrxLoadingSelectorService } from '../../services/instead-ngrx-loading-selector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styles: [`
    .page-wrapper {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class StartPageComponent {
  constructor(
    private loadingService: InsteadNgrxLoadingSelectorService,
    private router: Router
  ) {
    this.loadingService.loading$.next(false);
  }

  goToFirstPage(): void {
    this.loadingService.loading$.next(true);
    this.router.navigateByUrl('first');
  }
}
