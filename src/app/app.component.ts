import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  reset() {
    const message = confirm("You are not able to add new cards your limit reached");
    if (message == true) {
      this.items.length = 0;
    }
  }
  addItem(newItem: string) {
    if (this.items.length < 10) {
      this.items.push(newItem);
    } else {
      this.reset();
    }

  }
  remove() {
    if (this.items[this.items.length -1] !== ''){
      this.items.length--
    }
  }

  title = 'add-remove-cards';
}
