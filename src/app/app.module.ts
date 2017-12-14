
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from './components/authentication/auth.module';
import { RecipeModule } from './components/recipe/recipe.module';
import { AppRoutesModule } from './app-routing.module';
import { CookieModule } from 'ngx-cookie';
import { UserModule } from './components/users/user.module';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Services
import { UnauthService } from './services/unauth.service';
import { AuthGuard } from './guards/auth.guard.service';
import { EditGuard } from './guards/edit.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    AuthenticationModule,
    RecipeModule,
    UserModule,
    AppRoutesModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    EditGuard,
    UnauthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
