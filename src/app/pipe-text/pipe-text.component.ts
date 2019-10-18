import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-text',
  templateUrl: './pipe-text.component.html',
  styleUrls: ['./pipe-text.component.css']
})
export class PipeTextComponent implements OnInit {
   name="samraddhi khare"
   date=new Date()
  constructor() { }

  ngOnInit() {
  }

}
