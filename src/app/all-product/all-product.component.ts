import { Component, OnInit  } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit  {
  listProduct:Product[]=[];
constructor(private _ProductsService:ProductsService, private _Router:Router){


}
getCarData(){
  this._ProductsService.getCar().subscribe((res)=>{
    
console.log(res);
this.listProduct=res.cars;
  })
}
  ngOnInit(): void {
    this.getCarData();
    
  }
  goToDetails(id:number){
this._Router.navigateByUrl(`details/${id}`)
  }
  
}
