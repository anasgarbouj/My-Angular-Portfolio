import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/auth/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): Observable<boolean> {
    const userInfo = this.userService.getCurrentUserIdAndRole();

    if (!userInfo) {
      this.router.navigate(['/login']);
      return new Observable<boolean>(observer => observer.next(false));
    }

    return this.userService.getUserById(userInfo.id).pipe(
      map(user => {
        if (user.role === 'admin') {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return new Observable<boolean>(observer => observer.next(false));
      })
    );
  }
}
