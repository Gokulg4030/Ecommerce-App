import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishlist:any=[]
  empty:any

  constructor(private api:ApiService,private router:Router,private cart : CartService) { }

  ngOnInit(): void {

    this.api.getwishlist().subscribe(
      (data:any)=>{
       this.wishlist = data.products
       if(this.wishlist.length==0)
       {
        this.empty='Empty Wishlist'                       // for displaying empty wishlist
       }
      },
      /*(data:any)=>{
      this.empty = data.error.message
      }*/
    )
  }

  deletewish(product:any)
  {
     this.api.deletefromwish(product.id).subscribe(
     (result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('wish-list')     // after deleting product shows wish-list page
      this.wishlist=result.wishlist
       //window.location.reload()                  
     },
     (result:any)=>{
      alert(result.error.message)
     }
     )
  }

  addcart(product:any)
{
  this.cart.addcart(product)
  this.deletewish(product)
  
}
}



