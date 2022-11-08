import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotSelectedRecipeComponent } from './pages/recipes/not-selected-recipe/not-selected-recipe.component';
import { RecipeEditComponent } from './pages/recipes/recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './pages/recipes/recipes-detail/recipes-detail.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
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
  },
  {
    path:'shopping-list',
    component: ShoppingListComponent,
  },
  {
    path:'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
