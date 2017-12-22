import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GamePageComponent} from "./components/game-page/game-page.component";
import {SettingsPageComponent} from "./components/settings-page/settings-page.component";
import {ResultsPageComponent} from "./components/results-page/results-page.component";

const appRoutes: Routes = [
  {path: "", component: GamePageComponent},
  {path: "settings", component: SettingsPageComponent},
  {path: "results", component: ResultsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
