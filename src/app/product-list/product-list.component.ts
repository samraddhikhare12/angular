import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductData } from '../product-data';

import { from } from 'rxjs';
import { sharedStylesheetJitUrl } from '@angular/compiler';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=new ProductData().getproductList()
  selectedProduct:Product;
  childData: string;
  constructor() {}

  ngOnInit() {
    
    }
    onSelect(product:Product)
    {
      this.selectedProduct=product;
    }
    share(){
      window.alert("this message has been alter")
    }
    notifyUser(event){
      this.childData=event;
      window.alert(event);
    }
  }
  
  


