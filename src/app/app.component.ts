import {Component, OnInit} from "@angular/core";
import {SimpleBackendService} from "./services/simple-backend.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";
  public data: any;

  constructor(private backend: SimpleBackendService) {
  }

  ngOnInit() {
    this.backend.getSmth()
      .then((data) => {
        this.data = data;
      });
  }
}
