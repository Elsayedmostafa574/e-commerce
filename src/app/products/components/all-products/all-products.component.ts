import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.loading = false;
        this.products = res;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe((res: any) => {
      this.loading = false;
      this.categories = res;
    });
  }
  filterByCategory(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      this.getProducts();
    } else {
      this.getProductByFilterCategory(value);
    }
  }
  getProductByFilterCategory(category: any) {
    this.loading = true;
    this.service.getProductByCategory(category).subscribe((res: any) => {
      this.loading = false;
      this.products = res;
    });
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find((item) => item.item.id == event.item.id);
      if (exist) {
        Swal.fire({
          title: 'This Product Added Already',
          text: event.item.title,
          imageUrl: event.item.image,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        });
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
