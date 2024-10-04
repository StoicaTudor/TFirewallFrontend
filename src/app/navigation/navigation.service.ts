import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {
  }

  goToLogsPage() {
    this.router.navigate(['/logs'])
      .then(success => {
        console.log('Navigation to logs page successful:', success);
      })
      .catch(err => {
        console.error('Navigation to logs page failed:', err);
      });
  }

  // You can add more navigation functions here if needed
}
