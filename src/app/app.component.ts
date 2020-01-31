import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'registration-example';
  folders = [
    { name:'Sue Storm', updated:new Date() },
    { name: 'Frank Castle', updated: new Date() }
  ];

  ngOnInit() {
    console.warn('AppComponent.init');
    console.log(this.folders);
  }
}
