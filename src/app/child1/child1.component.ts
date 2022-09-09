import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { IProduct } from '../product.entity';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit , OnDestroy {

  products : IProduct[] = []; 
  message = false; 
  observer = {
    next:(data:IProduct)=>{
      this.products.push(data)
    },
    error:(err:any)=>{
      console.log(err);
    },
    complete:()=>{
      console.log('child1 observer completed');
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
