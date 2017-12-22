import {Component, OnInit} from "@angular/core";
import {SimpleBackendService} from "../../services/simple-backend.service";
import * as _ from "lodash";

@Component({
  selector: "app-results-page",
  templateUrl: "./results-page.component.html",
  styleUrls: ["./results-page.component.scss"]
})
export class ResultsPageComponent implements OnInit {

  public history;

  constructor(private backend: SimpleBackendService) {
  }

  ngOnInit() {
    this.backend.getHistory()
      .then((data) => {
        this.history = data;
      });
  }

  removeRecord(item) {
    this.backend.deleteRecord(item);
    this.history = _.reject(this.history, item);
  }

  printRecord(item) {
    let printContents, popupWin;
    printContents = `
      <h1>${item.name}</h1>
      <h3>Пол: ${item.sex}</h3>
      <h3>Возраст: ${item.age}</h3>
      <h3>Дата прохождения: ${item.date_time}</h3>
      <span>Дополнительная информация: ${item.description}</span>
      <ul>
    `;

    _.forEach(item.wordsHistory, word => {
      printContents += `<li>Слово: ${word.word}, время: ${word.duration} секунд</li>`;
    });

    printContents += `</ul>`;
    popupWin = window.open("", "_blank", "top=0,left=0,height=100%,width=auto");
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Печать результатов</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}
