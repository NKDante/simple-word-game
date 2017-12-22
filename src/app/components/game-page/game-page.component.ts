import {Component, OnInit} from "@angular/core";
import {GamePageService} from "./game-page.service";

@Component({
  selector: "app-game-page",
  templateUrl: "./game-page.component.html",
  styleUrls: ["./game-page.component.scss"]
})
export class GamePageComponent implements OnInit {

  constructor(public base: GamePageService) {
  }

  ngOnInit() {
    this.base.initNewUser();
  }

}
