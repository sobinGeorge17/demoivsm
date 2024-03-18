import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.css'
})
export class LeftSideBarComponent {
  constructor(private router:Router){}

  navigate(path:any){
    this.router.navigate([path])
  }

}
