import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs demo';
  @ViewChild('child2',{read:ViewContainerRef}) child2ref? : ViewContainerRef;
  @ViewChild('child3',{read:ViewContainerRef}) child3ref? : ViewContainerRef;


  async loadChild2(){
    this.child2ref?.clear();
    const {Child2Component} = await import('./child2/child2.component');
    this.child2ref?.createComponent(Child2Component);
  }
  async loadChild3(){
    this.child3ref?.clear();
    const {Child3Component} = await import('./child3/child3.component');
    this.child3ref?.createComponent(Child3Component);
  }

}
