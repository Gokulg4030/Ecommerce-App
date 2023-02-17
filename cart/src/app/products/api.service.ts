import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { ProductsComponent } from './products.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchkey = new BehaviorSubject('')     // BehaviourSubject is used for passing stream of data
  
  constructor(private http:HttpClient) { }             // dependency injection

  // get products

  getProducts(){                     // logic creation
    return this.http.get('http://localhost:3000/all-products')          /* link of all products from thunderclient
                                                                         for return the backend path*/

  }
  // for connecting backend and frontend

  // add to wishlist

  addtowishlist(products:any)
  {
    const body={
      id:products.id,
      title:products.title,
      price:products.price,
      description:products.description,
      image:products.image,
      
     }
    return this.http.post('http://localhost:3000/addtowishlist',body) 
  }

  // get wishlist

  getwishlist()
  {
    return this.http.get('http://localhost:3000/getwishlist')  
  }

  deletefromwish(id:any)
  {
    return this.http.delete('http://localhost:3000/deletewish/'+id)
  }
}


