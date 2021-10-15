import { animation } from '@angular/animations';
import { Component, HostListener, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'intersectionObserverAnimation';

  targets;
  
  constructor(private el: ElementRef){

  }

  ngOnInit(){
  }
  
  ngAfterViewInit(){
    this.targets = document.querySelectorAll('.animate');

      const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
          
          if(entry.intersectionRatio > 0) {
            console.log("isIntersecting id: " + entry.target.id)
            // entry.target.classList.add('animate__animated', 'animate__fadeInLeftBig');
            entry.target.classList.add('animateMe');
          } else {
            console.log("Else id: " + entry.target.id)
            // entry.target.classList.add('animationNone');
            // entry.target.classList.remove('animate__animated', 'animate__fadeInLeftBig');
            entry.target.classList.remove('animateMe');
          }

        })
    })

    this.targets.forEach(h1 => {
        observer.observe(h1)
    })



    // this.targets.forEach(observer);
  }
}
