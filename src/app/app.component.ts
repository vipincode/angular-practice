import { MatSelectChange } from '@angular/material/select';
import { DOCUMENT } from "@angular/common";
import { OverlayContainer } from "@angular/cdk/overlay";
import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  // Constructor methods
  ngOnInit() {
    this.renderer.removeClass(this.document.body, 'light-theme');
    this.renderer.addClass(this.document.body, 'dark-theme');
  }
  // Define dark theme on load [Default theme in ths case]

  setTheme({source}: MatSelectChange) {
    if(source.value === 'light') {
      this.renderer.removeClass(this.document.body, 'dark-theme');
      this.renderer.addClass(this.document.body, 'light-theme');
    } else {
      this.renderer.removeClass(this.document.body, 'light-theme');
      this.renderer.addClass(this.document.body, 'dark-theme');
    }
  }
  // Themes function
}
