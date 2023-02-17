import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/api.service';
import { CartService } from '../products/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartcount:number=0

  constructor(private api:ApiService ,private cart:CartService) { }         // injection

  ngOnInit(): void {

    this.cart.cartlist.subscribe(
      (data:any)=>
      {
        if(data)
        {
          this.cartcount=data.length
        }
      }
    )
  }
  search(event:any)
  {
    let searchkey = event.target.value     // for accessing the input of the search button
    this.api.searchkey.next(searchkey)      // method of BehaviorSubject
  }

}
