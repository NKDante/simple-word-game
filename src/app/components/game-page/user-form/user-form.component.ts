import {Component, OnInit} from "@angular/core";
import {GamePageService} from "../game-page.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {

  constructor(public base: GamePageService) {
  }

  ngOnInit() {
  }

}
