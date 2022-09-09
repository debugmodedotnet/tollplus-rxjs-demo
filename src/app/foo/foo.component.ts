import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent{

  @Input() a : any; 
  @Input() b : any; 
  @Input() c : any; 
  height = 100;
  width = 200; 

  constructor() { }



}
