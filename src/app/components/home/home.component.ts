import { environment } from './../../../environments/index';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor(private http: Http) { }

  ngOnInit(): void {
    // TODO: Remove that http headings testing.
    this.http.get(environment.GetFullPath('User'))
      .map(x => x.text())
      .subscribe(data => console.log('DATA: ', data))
      ;
  }

}
