
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './servises/Auth/auth.service'; // Import your AuthService
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject the AuthService
  const router = inject(Router); // Inject Router for redirection

  if (authService.isAuthenticated()) {
    return true; // Allow access if the user is authenticated
  } else {
    router.navigate(['/login']); // Redirect to login if not authenticated
    return false;
  }
};
