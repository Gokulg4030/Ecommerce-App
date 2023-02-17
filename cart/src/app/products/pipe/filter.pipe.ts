import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allProducts:[],searchkey:string,propname:string):any[]     // propname represents the category name (title)
  {

    const result:any=[];

    if(!allProducts ||searchkey==''|| propname=='')   // if search button is empty view allproducts page
    {
      return allProducts;
    }

    // searching

    allProducts.forEach((product:any)=>{
   if(product[propname].trim().toLowerCase().includes(searchkey.toLowerCase()))    // trim is used to remove the white spaces
   {  
      result.push(product)               //toLowerCase is used to convert all the search items is in lowercase bcz angular is case sensitive
   }                      
    })                                    
    return result;
  }

}
