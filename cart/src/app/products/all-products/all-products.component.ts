import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
 
  allProducts:any=[];    // array of details of allProducts

  searchterm:string='';

  constructor(private api:ApiService, private cart:CartService) { }   // injection then only we get api.service in all-products
                                             //(for displaying the content of api.service in all-products )
  
  ngOnInit(): void {
   this.api.getProducts().subscribe(              // done first in this component
    (data:any)=> {                            // subscribe is used to tell what to do next
    this.allProducts=data.Products          // this product is from backend (thunderclient)
    } 
   ) 
   
   this.api.searchkey.subscribe(       // serach
    (data:any)=>{
      this.searchterm=data
    }
   )
  }
  addtowishlist(product:any)
  {
    this.api.addtowishlist(product).subscribe(
    (result:any)=>{
      alert(result.message
        )
    },
    (result:any)=>{
      alert(result.error.message)
    }
    )

}
addcart(product:any)
{
  this.cart.addcart(product)
}

}
