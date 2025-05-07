import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Necesario para [(ngModel)]

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Se importa aquí porque es standalone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    // Login simulado sin validación te redirige al index
    this.router.navigate(['/index']);
  }
}
