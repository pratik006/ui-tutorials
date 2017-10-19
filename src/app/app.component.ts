import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service Ezy';
  sidebarVisible = true;
  sidebarClass = "sidenav";

  toggleSidePane(): void {console.log("click");
    this.sidebarVisible = !this.sidebarVisible;
    if (this.sidebarVisible) {
      this.sidebarClass = "sidenav";
    } else {
      this.sidebarClass = "sidenav-close";
    }
  }
}
