import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-iframe',
  templateUrl: './full-iframe.component.html',
  styleUrls: ['./full-iframe.component.scss']
})
export class FullIframeComponent implements OnInit {
  @Input() url: string = '';
  constructor() { }

  ngOnInit() {
  }

}
