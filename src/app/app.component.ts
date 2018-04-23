import { Component } from '@angular/core';
import { Quote } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myArr: Quote[]

  date: Date

  formSubmit(form) {
    this.myArr.push(new Quote(this.count++, form.value.author, form.value.name, form.value.quote, 0, 0, this.date))
    console.log(this.myArr)
  }

  constructor() {
    this.myArr = []

  }
}
