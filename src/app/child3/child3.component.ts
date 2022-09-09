import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { IProduct } from '../product.entity';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit , OnDestroy {

  products : IProduct[] = []; 
  message = false; 
  observer = {
    next:(data:IProduct)=>{
      this.products.push(data);
    },
    error:(err:any)=>{
      console.log(err);
    },
    complete:()=>{
      console.log('child3 observer completed');
      this.message = true; 
    }
  }; 
  productSubscription? : Subscription;

  constructor(private appservice : AppService) { }

  ngOnInit(): void {

    this.productSubscription = this.appservice.Products$.subscribe(this.observer);
  }

  ngOnDestroy(): void {
    if(this.productSubscription != undefined){
      this.productSubscription.unsubscribe();
    }
  }

}

@NgModule({
  declarations:[Child3Component],
  imports:[CommonModule]
})
export class Child3Module{

}
