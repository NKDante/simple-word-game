import {Component, OnInit} from "@angular/core";
import {SimpleBackendService} from "./services/simple-backend.service";
import {GamePageService} from "./components/game-page/game-page.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private backend: SimpleBackendService, public gamePage: GamePageService) {
  }

  ngOnInit() {
  }
}
