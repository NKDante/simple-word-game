import {Component, OnInit} from "@angular/core";
import {GamePageService} from "../game-page.service";
import * as _ from "lodash";
import * as moment from "moment";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-finish-page",
  templateUrl: "./finish-page.component.html",
  styleUrls: ["./finish-page.component.scss"]
})
export class FinishPageComponent implements OnInit {

  constructor(public base: GamePageService) {
  }

  ngOnInit() {
  }

  newGame() {
    this.base.finishMode = false;
  }

  printRecord() {
    const words = [["Слово", "Время прохождения"]];

    _.forEach(this.base.previousHistory.wordsHistory, word => {
      words.push([word.word, word.duration]);
    });

    const docDefinition = {
      content:
        [
          {text: `Имя: ${this.base.previousHistory.name}`, fontSize: 20},
          {text: `Возраст: ${this.base.previousHistory.age}`, fontSize: 15},
          {text: `Пол: ${this.base.previousHistory.sex}`, fontSize: 15},
          {text: `Дополнительная информация: ${this.base.previousHistory.description}`, fontSize: 15},
          {text: ``, fontSize: 15},
          {
            layout: "lightHorizontalLines",
            table: {
              headerRows: 1,
              widths: ["*", "auto"],
              body: words
            }
          }
        ]
    };

    pdfMake.createPdf(docDefinition)
      .download(`${this.base.previousHistory.name}-${moment(this.base.previousHistory.date_time, "DD.MM.YYYY HH:mm:ss")
        .format("YYYYMMDDHHmmss")}.pdf`);
  }

}
