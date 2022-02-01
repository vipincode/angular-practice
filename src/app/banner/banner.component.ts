import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  // @HostBinding('class.app-banner')
  // hostClass = true
  
  @Input()
  message='';

  @Input()
  type: 'primary' | 'success' | 'info' | 'warn' | 'accent' | 'none' = 'none';

  @HostBinding('class')
  get hostClass(): any {
    if( this.type !== 'none' ) {
      return `app-banner-${this.type}`;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
