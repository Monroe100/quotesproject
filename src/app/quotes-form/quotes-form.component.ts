import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quotes'
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  @Input() myArr

  upVote(id) {
    this.myArr[id].upvote()
  }
  downVote(id) {
    this.myArr[id].downvote()
  }
  delete(id) {
    this.myArr.splice(this.myArr[id],1)
  }
  constructor() {
    this.myArr = []
  }

  ngOnInit() {
  }

}
