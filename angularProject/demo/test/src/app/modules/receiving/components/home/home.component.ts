import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../../../services/api.service';
import { environment } from '../../../../../enviroments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy {
  subscribtion = new Subscription
  constructor(private apiService:ApiService) { }
  ngOnInit(): void {
    this.getData()
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe()
  }

  getData() {
    this.subscribtion.add(this.apiService.get(`${environment.apiUrl}/products`).subscribe((res)=>{
      // console.log(res);
    }))
    
  }


}
