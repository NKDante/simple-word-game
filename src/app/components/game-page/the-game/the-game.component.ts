import {Component, OnInit} from "@angular/core";
import * as moment from "moment";
import * as _ from "lodash";
import {GamePageService} from "../game-page.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/timer";

@Component({
  selector: "app-the-game",
  templateUrl: "./the-game.component.html",
  styleUrls: ["./the-game.component.scss"]
})
export class TheGameComponent implements OnInit {

  public currentWord;
  public currentTimer;
  private previousTime = moment();
  private currentWordsIndex = 0;
  private currentHistory;
  private source = Observable.timer(0, 1000);
  private subscribe;


  constructor(public base: GamePageService) {
  }

  ngOnInit() {
    this.base.getWords();
    this.currentWord = this.base.words[this.currentWordsIndex];
    this.currentHistory = {
      name: this.base.currentUser.name,
      age: this.base.currentUser.age,
      sex: this.base.currentUser.sex,
      description: this.base.currentUser.description,
      wordsHistory: []
    };

    // const randArray = [];
    // while (randArray.length < this.base.numberOfTimeredWords.value) {
    //   const rand = Math.floor(_.random(3, this.base.words.length - 2));
    //   if (randArray.indexOf(rand) > -1) {
    //     continue;
    //   }
    //   randArray.push(rand);
    // }
    //
    // _.forEach(this.base.words, (word, index) => {
    //   word.timered = _.includes(randArray, index);
    // });
  }

  cancelGame() {
    this.base.gameMode = false;
    this.subscribe.unsubscribe();
    this.base.initNewUser();
  }

  startTicking() {
    this.subscribe = this.source.subscribe(val => {
      this.currentTimer = this.base.timer.value - val;
      console.log(this.currentTimer, this.base.timer.value);

      if (this.currentTimer === 0) {
        this.subscribe.unsubscribe();
        this.switchWord({code: "Space"});
      }
    });
  }

  switchWord(event) {
    if (event.code === "Space") {
      if (this.subscribe) {
        this.subscribe.unsubscribe();
      }

      const ms = moment().diff(this.previousTime);
      this.previousTime = moment();
      const dur = moment.duration(ms).asMilliseconds();
      let duration;
      if (this.currentWord.timered && (dur / 1000) > this.base.timer.value) {
        duration = Math.floor(dur / 1000).toFixed(2);
      } else {
        duration = (dur / 1000).toFixed(2);
      }

      this.currentHistory.wordsHistory.push({
        word: this.currentWord.word,
        duration,
        timered: this.currentWord.timered
      });

      this.currentWordsIndex++;
      if (this.currentWordsIndex !== this.base.words.length) {
        this.currentWord = this.base.words[this.currentWordsIndex];

        if (this.currentWord.timered) {
          this.startTicking();
        }
      } else {
        this.currentHistory.date_time = moment().format("DD.MM.YYYY HH:mm:ss");
        this.base.saveHistory(this.currentHistory);
        this.base.gameMode = false;
        this.base.previousHistory = _.clone(this.currentHistory);
        this.base.initNewUser();
        this.base.finishMode = true;
      }
    }
  }
}
