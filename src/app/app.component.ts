import { Component } from '@angular/core';
import { AppConfig } from './app.config';
import { of, from, Observable } from 'rxjs'
import { distinctUntilChanged, map, reduce } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'super-admin';


  constructor(
    public config: AppConfig,
    private router:Router
  ) {

    this.router.events.subscribe(event => {
      console.log(event);
      
    })
    /** of([1, 2, 2, 2, 3]).pipe(distinctUntilChanged()).subscribe(val => console.log(val));
     from([1, 2, 2, 2, 3]).pipe(distinctUntilChanged(), map(val => val * 10), reduce((acc, val) => val + acc)).subscribe(val => console.log(val));
 */
  /**setTimeout(() => {
    this.router.navigate(['/users']);
  }, 5000);*/
  }
}
  