import { Component, OnInit } from '@angular/core';
import { Window } from 'selenium-webdriver';

@Component({
  selector: '[app-test]',
  template: `<div>
  Hello {{name}}
  <h2>{{2+2}}</h2>
  <h2>{{"welcome" + name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{getName()}}</h2>
  <h2>{{siteURL}}</h2>
  <div> <input type="text" value ="Chandra"/></div>
  </div>`,
  styles: []
})
export class TestComponent implements OnInit {
 public name = "chandra"
 public siteURL = window.location.href
  constructor() { }

  ngOnInit() {
  }

  public getName() {
    return this.name
  }


}
