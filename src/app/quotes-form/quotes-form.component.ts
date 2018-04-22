import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes'
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  // quote["", "", ""]
  myArr = [

  ]
  // new Quote(0, 'me', 'you', 'feeling lucky', 90, 30, new Date('2018-09-09'))
  count: number = 0
  upvotes: number = 0
  downvotes: number = 0

  formSubmit(x) {
    this.myArr.push(new Quote(this.count++, x.value.author, x.value.name, x.value.quote, this.upvotes, this.downvotes, x.value.date))
    // console.log(x.value.author, x.value.name, x.value.quote, x.value.date)

  }
  upVote() {
    this.upvotes++
  }
  downVote() {
    this.downvotes++
  }
  constructor() {
    console.log(this.myArr)
  }

  ngOnInit() {
  }

}
