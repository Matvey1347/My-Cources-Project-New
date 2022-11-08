import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './pages/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './pages/success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipesItemComponent } from './pages/recipes/recipes-item/recipes-item.component';
import { RecipesListComponent } from './pages/recipes/recipes-list/recipes-list.component';
import { ShoppingListComponent } from './pages/header/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './pages/header/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesDetailComponent } from './pages/recipes/recipes-detail/recipes-detail.component';
import { MyDirectiveDirective } from './shared/directives/myDirective/my-directive.directive';
import { UnlessDirective } from './shared/directives/unless/unless.directive';
import { DropDownDirective } from './shared/directives/dropDown/drop-down.directive';
import { ActiveUsersComponent } from './shared/practice/active-users/active-users.component';
import { DeactiveUsersComponent } from './shared/practice/deactive-users/deactive-users.component';
import { NotSelectedRecipeComponent } from './pages/recipes/not-selected-recipe/not-selected-recipe.component';
import { RecipeEditComponent } from './pages/recipes/recipe-edit/recipe-edit.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesItemComponent,
    RecipesListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesDetailComponent,
    MyDirectiveDirective,
    UnlessDirective,
    DropDownDirective,
    ActiveUsersComponent,
    DeactiveUsersComponent,
    NotSelectedRecipeComponent,
    RecipeEditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
