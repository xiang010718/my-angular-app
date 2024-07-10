import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent {
  display: boolean = false; // Controls the visibility of the dialog

  showDialog() {
    this.display = true; // Show the dialog
  }

  hideDialog() {
    this.display = false; // Hide the dialog
  }
}