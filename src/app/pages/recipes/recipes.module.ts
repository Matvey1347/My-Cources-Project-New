import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes.component';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { NotSelectedRecipeComponent } from './not-selected-recipe/not-selected-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipesItemComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    NotSelectedRecipeComponent,
    RecipeEditComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ],
  exports: [
    RecipesComponent,
    RecipesItemComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    NotSelectedRecipeComponent,
    RecipeEditComponent,
  ],
})
export class RecipesModule { }
