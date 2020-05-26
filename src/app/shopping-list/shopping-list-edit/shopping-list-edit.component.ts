import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  public onAddItem(): void {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientValue = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientValue);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
