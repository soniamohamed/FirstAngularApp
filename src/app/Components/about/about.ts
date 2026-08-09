import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Child } from "../child/child";



@Component({
  selector: 'app-about',
  imports: [Child],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit , AfterViewInit,OnDestroy{
  userName:string='Ahmed';
  userAge:number=30;
 @ViewChild('heading') element !:ElementRef;
  constructor() {
     console.log('%cHello constructor', 'color : yellow ');
  }
  

  ngOnInit(): void {
    // console.log('%cHello ngOnInit', 'color : red ');
     console.log(this.element);
  }

  ngAfterViewInit(): void {
     console.log('%cHello ngAfterViewInit', 'color : green ');
      console.log(this.element);
  }

  ngOnDestroy(): void {
    console.log('%cHello ngOnDestroy', 'color : blue ');
  }
}
