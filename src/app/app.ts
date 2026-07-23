import { Component } from '@angular/core';
import { Home } from './Components/home/home';
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [Home,Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activePage: string = 'home';

  changePage(pageName: string) {
    this.activePage = pageName;
  }
}