import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-deals',
  templateUrl: './rental-deals.component.html',
  styleUrls: ['./rental-deals.component.css']
})
export class RentalDealsComponent implements OnInit   {
  listProduct:Product[]=[];
  searchText:string='';
constructor(private _ProductsService:ProductsService,private _Router:Router){

}
getCarsData(){
  this._ProductsService.getCar().subscribe((res)=>{
this.listProduct=res.cars.slice(0, 5);

  })
}
  ngOnInit(): void {
    this.getCarsData();
    
  }


}
