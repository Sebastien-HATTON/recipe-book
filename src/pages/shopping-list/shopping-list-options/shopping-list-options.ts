
import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
  selector: 'page-shopping-list-options',
  templateUrl: 'shopping-list-options.html',
})
export class ShoppingListOptions {

  constructor(private viewCtrl: ViewController) {
  }

  onAction(action: string) {
    this.viewCtrl.dismiss({action: action});
  }

}
