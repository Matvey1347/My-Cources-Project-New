import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './pages/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './pages/success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './pages/shopping-list/shopping-edit/shopping-edit.component';
import { MyDirectiveDirective } from './shared/directives/myDirective/my-directive.directive';
import { UnlessDirective } from './shared/directives/unless/unless.directive';
import { DropDownDirective } from './shared/directives/dropDown/drop-down.directive';
import { ActiveUsersComponent } from './shared/practice/active-users/active-users.component';
import { DeactiveUsersComponent } from './shared/practice/deactive-users/deactive-users.component';
import { AuthComponent } from './pages/auth/auth.component';
import { PlaceholderDirective } from './shared/directives/placeholder/placeholder.directive';
import { RecipesModule } from './pages/recipes/recipes.module';
import { ShoppingListModule } from './pages/shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    HeaderComponent,
    MyDirectiveDirective,
    UnlessDirective,
    DropDownDirective,
    ActiveUsersComponent,
    DeactiveUsersComponent,
    AuthComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
