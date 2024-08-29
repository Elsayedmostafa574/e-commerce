import { Component , OnInit} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id:any;
  product:any;
  loading:boolean = false;
  constructor(private service:ProductsService , private route:ActivatedRoute){
    this.id = route.snapshot.paramMap.get("id");
  }
  ngOnInit(){
    this.getProduct()
  }
  getProduct(){
    this.loading = true;
    this.service.getProductDetails(this.id).subscribe((res:any)=>{
      this.loading = false;
      this.product = res;
    })
  }


}
