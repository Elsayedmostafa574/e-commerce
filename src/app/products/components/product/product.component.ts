import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() singleProduct!:Product;
  @Output() addItemToCart = new EventEmitter<any>();
   myQuantity:number = 1;
   isAddToCart:boolean = false;
   plus(){
    this.myQuantity += 1;
   }
   minus(){
    if(this.myQuantity === 0){
      this.myQuantity = 0
    }else{
      this.myQuantity -= 1;

    }
   }





  addToCart(){
    this.addItemToCart.emit({item: this.singleProduct, quantity: this.myQuantity});
  }
}
