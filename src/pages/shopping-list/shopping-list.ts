import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shopping-list-service";
import { Ingredient } from "../../models/ingredient";
import { PopoverController } from "ionic-angular";
import { ShoppingListOptionsPage } from "./shopping-list-options/shopping-list-options";
import { AuthService } from "../../services/auth-service";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  listItems: Ingredient[];

  constructor(private shoppingListService: ShoppingListService,
              private popoverCtrl: PopoverController,
              private authService: AuthService) {
  }

  ionViewWillEnter() {
    this.loadItems();
  }

  onAddItem(form: NgForm) {
    this.shoppingListService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  onCheckItem(index: number) {
    this.shoppingListService.removeItem(index);
    this.loadItems();
  }

  onShowOptions(event: MouseEvent) {
    const popover = this.popoverCtrl.create(ShoppingListOptionsPage);
    popover.present({ev: event});
    popover.onDidDismiss(
      data => {
        if (data.action == 'load') {

        } else  {
          this.authService.getActiveUser().getToken()
            .then(
              (token: string) => {
                this.shoppingListService.storeList(token)
                  .subscribe(
                    () => console.log('Success!'),
                    error => {
                      console.log(error);
                    }
                  );
              }
            );
        }
      }
    );
  }

  private loadItems() {
    this.listItems = this.shoppingListService.getItems();
  }

}
