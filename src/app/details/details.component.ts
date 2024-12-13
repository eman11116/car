import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  productId:string=''
  productDetails!:Product;

 constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService){
  _ActivatedRoute.params.subscribe((param:any)=>{
   this.productId=param.id
  })
 }

 getProductInfo(){
  this._ProductsService.getProductDetails(this.productId).subscribe({
    next:(res:any)=>{
this. productDetails=res     
    }
  })
}
 ngOnInit(): void {
   this.getProductInfo();
 }
}
