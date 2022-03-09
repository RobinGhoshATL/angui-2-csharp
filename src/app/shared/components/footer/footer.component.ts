import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  today: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
