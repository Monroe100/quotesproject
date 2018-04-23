import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quotes'
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  @Input() myArr: Quote
  count: number = 0

  count2: number = 0

  upVote() {

    this.count++

  }

  downVote() {

    this.count2++

  }


  constructor() {
    this.myArr = []
  }

  ngOnInit() {
  }

}
