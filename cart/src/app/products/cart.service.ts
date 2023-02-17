import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartarray:any=[]
  cartlist= new BehaviorSubject([])      // for passing stream of data

  constructor() { }

  // add to cart
   
  addcart(product:any)
  {
    this.cartarray.push(product);
    this.cartlist.next(this.cartarray)
    console.log(this.cartlist);
    
  }
  gettotal(){
    var grandsum=0;
   this.cartarray.map((item:any)=>{
      grandsum+=item.price
    })
    return grandsum
  }
  removecart(product:any){
    this.cartarray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartarray.splice(index,1);
      }
    }
    )
    this.cartlist.next(this.cartarray)
  }
  removeall(){
    this.cartarray=[];
    this.cartlist.next(this.cartarray)
  }

}
