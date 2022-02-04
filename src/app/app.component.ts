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
  readonly themeAnchor = this.document.getElementById('app-theme');
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  // Constructor methods
  ngOnInit() {}
  // Define dark theme on load [Default theme in ths case]

  setTheme({source}: MatSelectChange) {
    if(source.value === 'light') {
      this.renderer.setAttribute(this.themeAnchor, 'href', '/light-theme.css');
    } else {
      this.renderer.setAttribute(this.themeAnchor, 'href', '/dark-theme.css');
    }
  }
  // Themes function
}
