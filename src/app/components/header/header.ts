import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(public authService: Auth) {
    
  }
}
