import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";


import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {SimpleBackendService} from "./services/simple-backend.service";
import {GamePageComponent} from "./components/game-page/game-page.component";
import {SettingsPageComponent} from "./components/settings-page/settings-page.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {UserFormComponent} from "./components/game-page/user-form/user-form.component";
import {GamePageService} from "./components/game-page/game-page.service";
import {FormsModule} from "@angular/forms";
import {FlashMessagesModule} from "angular2-flash-messages";
import {TheGameComponent} from "./components/game-page/the-game/the-game.component";
import {ResultsPageComponent} from "./components/results-page/results-page.component";

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    SettingsPageComponent,
    UserFormComponent,
    TheGameComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [SimpleBackendService, GamePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
