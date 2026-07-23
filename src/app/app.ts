import { Component } from '@angular/core';
import { Home } from './Components/home/home';
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';
import { About } from './Components/about/about';
import { Contact } from './Components/contact/contact';


@Component({
  selector: 'app-root',
  imports: [Home,About,Contact,Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activePage: string = 'home';

  changePage(pageName: string) {
    this.activePage = pageName;
  }
}