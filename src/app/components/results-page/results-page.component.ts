import {Component, OnInit} from "@angular/core";
import {SimpleBackendService} from "../../services/simple-backend.service";
import * as ExportJsonExcel from "js-export-excel";
import * as _ from "lodash";
import * as moment from "moment";

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
    this.history = this.backend.getHistory();
  }

  removeRecord(item) {
    this.backend.deleteRecord(item);
    this.history = _.reject(this.history, item);
  }

  printRecord(item) {
    const option = {fileName: "", datas: []};

    option.fileName = `${item.name}-${moment(item.date_time, "DD.MM.YYYY HH:mm:ss")
      .format("YYYYMMDDHHmmss")}`;
    option.datas = [
      {
        sheetData: [
          {text: `Имя:`, value: item.name},
          {text: `Возраст:`, value: item.age},
          {text: `Пол:`, value: item.sex},
          {text: `Дополнительная информация:`, value: item.description},
          {text: ``}
        ],
        sheetName: "sheet"
      }
    ];

    _.forEach(item.wordsHistory, word => {
      option.datas[0].sheetData.push({
        text: word.word, value: word.duration,
        timered: word.timered ? "Слово с таймером" : "Слово без таймера"
      });
    });
    const toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel();
    // const data = [
    //   {text: `Имя:`, value: item.name},
    //   {text: `Возраст:`, value: item.age},
    //   {text: `Пол:`, value: item.sex},
    //   {text: `Дополнительная информация:`, value: item.description},
    //   {text: ``}
    // ];
    //
    // _.forEach(item.wordsHistory, word => {
    //   data.push({text: word.word, value: word.duration});
    // });
    //
    // new Angular2Csv(data, `${item.name}-${moment(item.date_time, "DD.MM.YYYY HH:mm:ss")
    //   .format("YYYYMMDDHHmmss")}`);
    // const words = [["Слово", "Время прохождения"]];
    //
    // _.forEach(item.wordsHistory, word => {
    //   words.push([word.word, word.duration]);
    // });
    //
    // const docDefinition = {
    //   content:
    //     [
    //       {text: `Имя: ${item.name}`, fontSize: 20},
    //       {text: `Возраст: ${item.age}`, fontSize: 15},
    //       {text: `Пол: ${item.sex}`, fontSize: 15},
    //       {text: `Дополнительная информация: ${item.description}`, fontSize: 15},
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
    //   .download(`${item.name}-${moment(item.date_time, "DD.MM.YYYY HH:mm:ss")
    //     .format("YYYYMMDDHHmmss")}.pdf`);
  }

}
