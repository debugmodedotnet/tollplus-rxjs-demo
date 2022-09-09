import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';
import { AppService } from '../app.service';
import { IProduct } from '../product.entity';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit , OnDestroy {

  products : IProduct[] = [];
  message = false;  
  observer = {
    next:(data:IProduct)=>{
      this.products.push(data); 
      console.log(this.products);
      this.cd.markForCheck();
      
    },
    error:(err:any)=>{
      console.log(err);
    },
    complete:()=>{
      console.log('child2 observer completed');
      this.message = true; 
    }
  }; 
  productSubscription? : Subscription;

  constructor(private appservice : AppService, private cd : ChangeDetectorRef) { }

  ngOnInit(): void {

    this.productSubscription = this.appservice.Products$.pipe(
      tap((data)=>{console.log(data)})
    ).subscribe(this.observer);
  }

  ngOnDestroy(): void {
    if(this.productSubscription != undefined){
      this.productSubscription.unsubscribe();
    }
  }

}

@NgModule({
  declarations:[Child2Component],
  imports:[CommonModule]
})
export class Child2Module{

}

// import { CommonModule } from '@angular/common';
// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgModule, OnDestroy, OnInit } from '@angular/core';
// import { map, Observable, Subscription, tap } from 'rxjs';
// import { AppService } from '../app.service';
// import { IProduct } from '../product.entity';

// @Component({
//   selector: 'app-child2',
//   templateUrl: './child2.component.html',
//   styleUrls: ['./child2.component.css'],
//   changeDetection:ChangeDetectionStrategy.OnPush
// })
// export class Child2Component implements OnInit  {

//   products? : Observable<IProduct>; 
  

//   constructor(private appservice : AppService) { }

//   ngOnInit(): void {

//     this.products = this.appservice.Products$; 
//   }

// }

// @NgModule({
//   declarations:[Child2Component],
//   imports:[CommonModule]
// })
// export class Child2Module{

// }




// onPush 
// async pipe 
// SRP 
// all modules must ve lazy
// ng lint 
// pipes
// never manipulate DOM on component class 
