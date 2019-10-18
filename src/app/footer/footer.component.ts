import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<h5>&copy;</h5>
  <h6>all right reserved</h6>`,
  styles: ['h5{backgroud-color:blue; }','h6{color:pink}']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
