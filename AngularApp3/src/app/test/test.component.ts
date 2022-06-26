import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  txtData:String='This is my first Command';
  constructor() { }

  ngOnInit(): void {
  }

  ChangeText(event:any)
  {
debugger;
alert(this.txtData.toUpperCase()+". I have added one more line.".toUpperCase());
  }

}
