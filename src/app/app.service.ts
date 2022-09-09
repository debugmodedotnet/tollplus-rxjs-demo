import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { IProduct } from './product.entity';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  
  Products : IProduct  = 
  {
  Id : 1,
  Title :"Book",
  Price: 200
  }

  count = 0; 

//Products$ : Observable<IProduct>; 
// Products$ : Subject<IProduct>;
 Products$ : BehaviorSubject<IProduct>;
// Products$ : ReplaySubject<IProduct>;
//Products$ : AsyncSubject<IProduct>;



  constructor() {


    //  this.Products$ = new Observable<IProduct>(
    //   (subscriber:any)=>{
    //     let count = 0; 
    //     setInterval(()=>{
    //       count = count + 1; 
    //       if(count> 10){
    //         subscriber.complete();
    //       }
    //       else {
    //         let p : IProduct = {
    //           Id : count, 
    //           Title : "Pen" + count,
    //           Price : 10 *  count
    //         }
    //         subscriber.next(p);
    //       }
    //     }, 1000);
    //   }
    //  )
    

  // this.Products$ = new Subject<IProduct>();
  // setInterval(()=>{
  //   this.count = this.count + 1; 
  //   if(this.count> 10){
  //     this.Products$.complete();
  //   }
  //   else {
  //     let p : IProduct = {
  //       Id : this.count, 
  //       Title : "Pen" + this.count,
  //       Price : 10 *  this.count
  //     }
  //     this.Products$.next(p);
  //   }
  // }, 1000);



  this.Products$ = new BehaviorSubject<IProduct>(this.Products);
  setInterval(()=>{
    this.count = this.count + 1; 
    if(this.count> 10){
      this.Products$.complete();
    }
    else {
      let p : IProduct = {
        Id : this.count, 
        Title : "Pen" + this.count,
        Price : 10 *  this.count
      }
      this.Products$.next(p);
    }
  }, 2000);



  // this.Products$ = new ReplaySubject<IProduct>();
  // setInterval(()=>{
  //   this.count = this.count + 1; 
  //   if(this.count> 10){
  //     this.Products$.complete();
  //   }
  //   else {
  //     let p : IProduct = {
  //       Id : this.count, 
  //       Title : "Pen" + this.count,
  //       Price : 10 *  this.count
  //     }
  //     this.Products$.next(p);
  //   }
  // }, 2000);

  // this.Products$ = new AsyncSubject<IProduct>();
  // setInterval(()=>{
  //   this.count = this.count + 1; 
  //   if(this.count> 10){
  //     this.Products$.complete();
  //   }
  //   else {
  //     let p : IProduct = {
  //       Id : this.count, 
  //       Title : "Pen" + this.count,
  //       Price : 10 *  this.count
  //     }
  //     this.Products$.next(p);
  //   }
  // }, 2000);

  }

}
