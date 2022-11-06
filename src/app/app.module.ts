import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesItemComponent } from './recipes/recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { MyDirectiveDirective } from './shared/directives/myDirective/my-directive.directive';
import { UnlessDirective } from './shared/directives/unless/unless.directive';
import { DropDownDirective } from './shared/directives/dropDown/drop-down.directive';
import { ActiveUsersComponent } from './shared/practice/active-users/active-users.component';
import { DeactiveUsersComponent } from './shared/practice/deactive-users/deactive-users.component';
import { NotSelectedRecipeComponent } from './recipes/not-selected-recipe/not-selected-recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

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
    RecipeEditComponent
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
