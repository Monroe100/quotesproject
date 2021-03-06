export class Quote {
  public id: number
  public author: string
  public name: string
  public quote: string
  public upvotes: number
  public downvotes: number
  public date: Date
  constructor(id, author, name, quote, upvotes, downvotes, date) {
    this.id = id
    this.author = author
    this.name = name
    this.quote = quote
    this.upvotes = upvotes
    this.downvotes = downvotes
    this.date = new Date()
  }
  upvote() {

    this.upvotes++

  }

  downvote() {

    this.downvotes++

  }


}
