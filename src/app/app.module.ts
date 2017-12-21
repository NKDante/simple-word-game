import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";


import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {SimpleBackendService} from "./services/simple-backend.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SimpleBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
