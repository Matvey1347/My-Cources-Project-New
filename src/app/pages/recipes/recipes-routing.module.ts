import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotSelectedRecipeComponent } from './not-selected-recipe/not-selected-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path:'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: NotSelectedRecipeComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipesDetailComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }