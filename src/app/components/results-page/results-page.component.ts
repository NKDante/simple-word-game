import {Component, OnInit} from "@angular/core";
import {SimpleBackendService} from "../../services/simple-backend.service";
import * as _ from "lodash";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
    const words = [["Слово", "Время прохождения"]];

    _.forEach(item.wordsHistory, word => {
      words.push([word.word, word.duration]);
    });

    const docDefinition = {
      content:
        [
          {text: `Имя: ${item.name}`, fontSize: 20},
          {text: `Возраст: ${item.age}`, fontSize: 15},
          {text: `Пол: ${item.sex}`, fontSize: 15},
          {text: `Дополнительная информация: ${item.description}`, fontSize: 15},
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

    pdfMake.createPdf(docDefinition).download();
  }

}
