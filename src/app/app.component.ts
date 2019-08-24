import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jc-client';

  cancelled() {
    console.log("Cancelled!");
  }

  confirmed() {
    console.log("Confirmed!");
  }
}
