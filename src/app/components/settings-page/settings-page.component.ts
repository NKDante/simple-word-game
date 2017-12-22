import {Component, OnInit} from "@angular/core";
import {SimpleBackendService} from "../../services/simple-backend.service";
import * as _ from "lodash";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: "app-settings-page",
  templateUrl: "./settings-page.component.html",
  styleUrls: ["./settings-page.component.scss"]
})
export class SettingsPageComponent implements OnInit {

  public words: any;
  public timer: any;
  public numberOfTimered;
  public existingWords;

  constructor(private backend: SimpleBackendService, private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.backend.getCurrentWords()
      .then((data) => {
        this.words = data;

        return this.backend.getTimer();
      })
      .then((data) => {
        this.timer = data;

        return this.backend.getNumberOfTimeredWords();
      })
      .then((data) => {
        this.numberOfTimered = data;
        this.countWords();
      });
  }

  deleteWord(word: any) {
    word.toDelete = true;
    this.countWords();
  }

  addWord() {
    this.words.push({
      word: "",
      toAdd: true
    });
    this.countWords();
  }

  saveWords() {
    const existingWords = _.filter(this.words, word => !word.toDelete);
    if (this.numberOfTimered.value > existingWords.length - 5) {
      this.flashMessage.show("Ошибка!", {cssClass: "alert alert-danger"});

      return;
    }
    _.forEach(this.words, word => {
      if (word.toDelete) {
        this.backend.deleteWord(word);
      } else if (word.toAdd) {
        delete word.toAdd;
        this.backend.saveWord(word);
      } else {
        this.backend.changeWord(word);
      }
    });

    this.backend.saveTimer(this.timer);
    this.backend.saveNumberOfTimeredWords(this.numberOfTimered);
    this.words = _.reject(this.words, {toDelete: true});
    this.flashMessage.show("Сохранено!", {cssClass: "alert alert-success"});
  }

  countWords() {
    const existingWords = _.filter(this.words, word => !word.toDelete);
    this.existingWords = existingWords.length;
  }
}