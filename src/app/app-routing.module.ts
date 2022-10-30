import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotSelectedRecipeComponent } from './recipes/not-selected-recipe/not-selected-recipe.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

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
        path: ':id',
        component: RecipesDetailComponent
      },
    ]
  },
  {
    path:'shopping-list',
    component: ShoppingListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
