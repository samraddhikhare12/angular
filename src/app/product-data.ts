import{Product}from './product'
import { ProductListComponent } from './product-list/product-list.component';
export class ProductData {
     productList : Product[]=[{
         id:1001,
         name:"car",
         brand:"tatamoter",
         price:234400
     },{
         id:1002,
         name: "tv",
         brand:"hcl",
         price:89765
     },{
         id: 1003,
         name:"laptop",
         brand:"dell",
         price:8653
     },];
 
     getproductList():Product[]
     {
         return this.productList;
     }
    }


