import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) shopForm: NgForm;
  public subscription: Subscription;
  public editMode = false;
  public itemEditedIndex: number;
  public editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.editStarted.subscribe(
      (index: number) => {
        this.itemEditedIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientAtIndex(index);
        this.shopForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  public onAddItem(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.itemEditedIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onClear() {
    this.shopForm.resetForm();
    this.editMode = false;
  }

  public onDelete() {
    this.shoppingListService.deleteIngredient(this.itemEditedIndex);
    this.onClear();
  }
}
