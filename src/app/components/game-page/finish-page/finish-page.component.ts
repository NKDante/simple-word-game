import {Component, OnInit} from "@angular/core";
import {GamePageService} from "../game-page.service";
import {Angular2Csv} from "angular2-csv/Angular2-csv";
// import * as ExportJsonExcel from "js-export-excel";
import * as _ from "lodash";
import * as moment from "moment";

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
    // const option = {fileName: "", datas: []};
    //
    // option.fileName = `${this.base.previousHistory.name}-${moment(this.base.previousHistory.date_time, "DD.MM.YYYY HH:mm:ss")
    //   .format("YYYYMMDDHHmmss")}`;
    // option.datas = [
    //   {
    //     sheetData: [
    //       {text: `Имя:`, value: this.base.previousHistory.name},
    //       {text: `Возраст:`, value: this.base.previousHistory.age},
    //       {text: `Пол:`, value: this.base.previousHistory.sex},
    //       {text: `Дополнительная информация:`, value: this.base.previousHistory.description},
    //       {text: ``}
    //     ],
    //     sheetName: "sheet"
    //   }
    // ];
    //
    // _.forEach(this.base.previousHistory.wordsHistory, word => {
    //   option.datas[0].sheetData.push({
    //     text: word.word, value: word.duration,
    //     timered: word.timered ? "Слово с таймером" : "Слово без таймера"
    //   });
    // });
    // const toExcel = new ExportJsonExcel(option);
    // toExcel.saveExcel();

    const options = {
      fieldSeparator: `;`,
      quoteStrings: `"`,
      decimalseparator: `,`,
      showLabels: true,
      showTitle: false,
      useBom: true
    };

    const data = [
      {text: `Имя:`, value: this.base.previousHistory.name, timered: ""},
      {text: `Возраст:`, value: this.base.previousHistory.age, timered: ""},
      {text: `Пол:`, value: this.base.previousHistory.sex, timered: ""},
      {text: `Дополнительная информация:`, value: this.base.previousHistory.description, timered: ""},
      {text: ``, value: "", timered: ""}
    ];

    _.forEach(this.base.previousHistory.wordsHistory, word => {
      const timered = word.timered ? "Слово с таймером" : "Слово без таймера";
      data.push({
        text: word.word,
        value: word.duration,
        timered
      });
    });

    new Angular2Csv(data, `${this.base.previousHistory.name}-${moment(this.base.previousHistory.date_time, "DD.MM.YYYY HH:mm:ss")
      .format("YYYYMMDDHHmmss")}`, options);


    // const words = [["Слово", "Время прохождения"]];
    //
    // _.forEach(this.base.previousHistory.wordsHistory, word => {
    //   words.push([word.word, word.duration]);
    // });
    //
    // const docDefinition = {
    //   content:
    //     [
    //       {text: `Имя: ${this.base.previousHistory.name}`, fontSize: 20},
    //       {text: `Возраст: ${this.base.previousHistory.age}`, fontSize: 15},
    //       {text: `Пол: ${this.base.previousHistory.sex}`, fontSize: 15},
    //       {text: `Дополнительная информация: ${this.base.previousHistory.description}`, fontSize: 15},
    //       {text: ``, fontSize: 15},
    //       {
    //         layout: "lightHorizontalLines",
    //         table: {
    //           headerRows: 1,
    //           widths: ["*", "auto"],
    //           body: words
    //         }
    //       }
    //     ]
    // };
    //
    // pdfMake.createPdf(docDefinition)
    //   .download(`${this.base.previousHistory.name}-${moment(this.base.previousHistory.date_time, "DD.MM.YYYY HH:mm:ss")
    //     .format("YYYYMMDDHHmmss")}.pdf`);
  }

}
