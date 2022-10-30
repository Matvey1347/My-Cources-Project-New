import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients/ingredients.model';
import { ShoppingListService } from 'src/app/shared/services/shoppingListService/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput') nameAmountRef: ElementRef | undefined;
  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
  }

  onAddItem() {
    const newIngredient = new Ingredients(
      this.nameInputRef?.nativeElement.value, 
      this.nameAmountRef?.nativeElement.value
    );
    this.shoppingService.addIngredient(newIngredient)
  }

}
