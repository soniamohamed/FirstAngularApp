import { Component } from '@angular/core';
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activePage: string = 'home';

  changePage(pageName: string) {
    this.activePage = pageName;
  }
}