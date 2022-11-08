import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../../../shared/ingredients/ingredients.model';
import { ShoppingListService } from '../../../shared/services/shoppingListService/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] | undefined;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChange.subscribe((val) => {
      this.ingredients = val;
    })
  }

  onEditItem(i: number) {
    this.shoppingService.startedEditing.next(i);
  }
}
