import { Observable } from 'rxjs';

const observanle = new Observable((subscriber) => {
      subscriber.next("Yassine zaher")
})


observanle.subscribe({
      next : (value) => {
            console.log(value);
      }
})