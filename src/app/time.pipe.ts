import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
   now:Date
   diff:number
  transform(dt: Date): any {
     this.now = new Date()
      this.diff = this.now.getTime()-dt.getTime()
    return "a few seconds ago"
  }

}
