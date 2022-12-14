import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from 'src/app/pages/recipes/recipes.model';
import { Ingredients } from '../../ingredients/ingredients.model';
import { ShoppingListService } from '../shoppingListService/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',  
      'This is simply a test', 
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Chicken-chow-mein-7aeec1d.png?resize=960,872?quality=90&webp=true&resize=750,681',
      [new Ingredients('Meat', 1), new Ingredients('Fish', 200)]
      ),
    new Recipe(
      'Another Test Recipe',  
      'This is simply a test', 
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Chicken-chow-mein-7aeec1d.png?resize=960,872?quality=90&webp=true&resize=750,681',
      [new Ingredients('Bread', 11), new Ingredients('Bear', 50)]
      ),
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }
}
