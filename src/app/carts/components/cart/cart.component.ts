import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts:any[] = [];
  total:any = 0;
constructor(private service:CartService){}
ngOnInit(){
  this.getCartProduct();
}


  plus(index:any){
    
    this.cartProducts[index].quantity++;
    this.getTotalCart();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
   }
   minus(index:any){
    
    if(this.cartProducts[index].quantity > 0){
      this.cartProducts[index].quantity--;
      this.getTotalCart();
      localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    }else{
      this.cartProducts[index].quantity = 0;

    }
   }

   detectAmount(){
    this.getTotalCart();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
   }
   deleteProduct(index:number){
     this.cartProducts.splice(index , 1);
     this.getTotalCart();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
   }
   getCartProduct(){
    if('cart' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }
    this.getTotalCart();
   }
   getTotalCart(){
    this.total = 0;
    for(let x in this.cartProducts){
      this.total+= this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
   }

   addCart(){
    let products = this.cartProducts.map((item)=>{
      return {productId : item.item.id , quantity : item.quantity}
    })
    let model = {
      userId: 5,
      date: new Date(),
      products: products
    }
    this.service.createNewCart(model).subscribe((res:any)=>{
      Swal.fire({
        title: "Good",
        text: "Your Products were sent Successfully!",
        icon: "success"
      });
    })
   }
}
