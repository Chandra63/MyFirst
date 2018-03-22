  import { Component, OnInit } from '@angular/core';
  import { Window } from 'selenium-webdriver';

  @Component({
    selector: '[app-test]',
    template: `<div>
    Hello {{name}}
    <h2>{{2+2}}</h2>
    <h2>{{"welcome to this " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{getName()}}</h2>
    <h2>{{siteURL}}</h2>
    <div> <input type="text" value ="Chandra"/>
    <input id = {{myId}} bind-disabled = "isDisabled" type ="text" value ="Property Binding"/>
    <h3 bind-class = "successClass">Chandra</h3>
    <h3 bind-class = "messageClass.errorClass">Chandra</h3>
    </div>
    </div>`,

    styles: [
  `
    .txt-success {color : green;}
    .txt-error {color : red;}
    .txt-special {color : blue;}
  `

    ]
  })
  export class TestComponent implements OnInit {

    public hasError = true  
    public successClass = "txt-success"
    public errorClass = "txt-error"
    public specialClass = "txt-special" 
    public messageClass = {
      successClass : "txt-success",
      errorClass   : "txt-error"
    }
    public name = "chandra"
    public myId = "testId"
    public isDisabled = false
  public siteURL = window.location.href
    constructor() { }

    ngOnInit() {
    }

    public getName() {
      return this.name
    }


  }
