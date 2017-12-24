import {Injectable} from "@angular/core";
import * as _ from "lodash";

@Injectable()
export class SimpleBackendService {

  // private mainUrl = "http://localhost:3000";
  // private thesaurusUrl = this.mainUrl + "/thesaurus";
  // private timerUrl = this.mainUrl + "/timer";
  // private historyUrl = this.mainUrl + "/history";

  constructor() {
  }

  getCurrentWords() {
    // return this.http
    //   .get<any>(this.thesaurusUrl)
    //   .toPromise();
    return db.thesaurus;
  }

  deleteWord(word: any) {
    // return this.http
    //   .delete(`${this.thesaurusUrl}/${word.id}`)
    //   .toPromise();
    db.thesaurus = _.reject(db.thesaurus, word);
  }

  saveWord(word) {
    // return this.http
    //   .post(this.thesaurusUrl, word)
    //   .toPromise();
    db.thesaurus.push(word);
  }

  changeWord(word) {
    // return this.http
    //   .put(`${this.thesaurusUrl}/${word.id}`, word)
    //   .toPromise();
    const $word = _.find(db.thesaurus, word);
    $word.word = word.word;
  }

  getTimer() {
    // return this.http
    //   .get(this.timerUrl)
    //   .toPromise();
    return db.timer;
  }

  saveTimer(timer) {
    // return this.http
    //   .put(this.timerUrl, timer)
    //   .toPromise();
    db.timer.value = timer.value;
  }

  getNumberOfTimeredWords() {
    // return this.http
    //   .get(`${this.mainUrl}/timered_words`)
    //   .toPromise();
    return db.timered_words;
  }

  saveNumberOfTimeredWords(timered) {
    // return this.http
    //   .put(`${this.mainUrl}/timered_words`, timered)
    //   .toPromise();
    db.timered_words.value = timered.value;
  }

  saveHistory(history) {
    // return this.http
    //   .post(this.historyUrl, history)
    //   .toPromise();
    db.history.push(history);
  }

  getHistory() {
    // return this.http
    //   .get(this.historyUrl)
    //   .toPromise();
    return db.history;
  }

  deleteRecord(item) {
    // return this.http
    //   .delete(`${this.historyUrl}/${item.id}`)
    //   .toPromise();
    db.history = _.reject(db.history, item);
  }
}

const db = {
  "thesaurus": [
    {"word": "целтниса", "id": 1, timered: false},
    {"word": "стэконап", "id": 2, timered: false},
    {"word": "бжиканум", "id": 3, timered: false},
    {"word": "ниафслит", "id": 4, timered: true},
    {"word": "кнвияаса", "id": 5, timered: false},
    {"word": "окирьпус", "id": 6, timered: false},
    {"word": "рукшваат", "id": 7, timered: true},
    {"word": "олкочбоа", "id": 8, timered: false},
    {"word": "ннмииаве", "id": 9, timered: true},
    {"word": "брилунат", "id": 10, timered: false},
    {"word": "агрдорбе", "id": 11, timered: true},
    {"word": "тсоткучь", "id": 12, timered: false},
    {"word": "сарукнип", "id": 13, timered: true},
    {"word": "арнпсить", "id": 14, timered: true},
    {"word": "апоитезг", "id": 15, timered: false},
    {"word": "такучсин", "id": 16, timered: true},
    {"word": "згманиум", "id": 17, timered: false},
    {"word": "граизном", "id": 18, timered: true},
    {"word": "яивирсед", "id": 19, timered: false},
    {"word": "лтаианик", "id": 20, timered: false},
    {"word": "аиблукдт", "id": 21, timered: false},
    {"word": "сялтхоко", "id": 22, timered: true},
    {"word": "кьджости", "id": 23, timered: false},
    {"word": "альгстно", "id": 24, timered: true},
    {"word": "жлианокз", "id": 25, timered: false},
    {"word": "нпегосад", "id": 26, timered: false},
    {"word": "атвазкса", "id": 27, timered: true},
    {"word": "идарицтя", "id": 28, timered: false},
    {"word": "оозлятир", "id": 29, timered: true},
    {"word": "урткиент", "id": 30, timered: false},
    {"word": "циниуият", "id": 31, timered: false},
    {"word": "скоптэрм", "id": 32, timered: false},
    {"word": "тордикен", "id": 33, timered: true},
    {"word": "мфагтнер", "id": 34, timered: false},
    {"word": "инилбатр", "id": 35, timered: false},
    {"word": "ениблара", "id": 36, timered: true},
    {"word": "каздгаар", "id": 37, timered: true},
    {"word": "мамзнихе", "id": 38, timered: false},
    {"word": "ретигмек", "id": 39, timered: false},
    {"word": "кйаакемс", "id": 40, timered: false}
  ],
  "timer": {"value": 5},
  "timered_words": {"value": 15},
  "history": [
    // {
    //   "name": "Никита",
    //   "age": "23",
    //   "sex": "М",
    //   "description": "Ничего",
    //   "wordsHistory": [
    //     {
    //       "word": "ывапывап",
    //       "duration": 3
    //     },
    //     {
    //       "word": "ывапывап",
    //       "duration": 1
    //     },
    //     {
    //       "word": "ывапывап",
    //       "duration": 1
    //     },
    //     {
    //       "word": "ывапывап",
    //       "duration": 1
    //     },
    //     {
    //       "word": "sdfasdf",
    //       "duration": 2
    //     },
    //     {
    //       "word": "asdfsdf",
    //       "duration": 1
    //     },
    //     {
    //       "word": "sdfgdfg",
    //       "duration": 0
    //     },
    //     {
    //       "word": "dddfgdfg",
    //       "duration": 0
    //     },
    //     {
    //       "word": "dfg",
    //       "duration": 1
    //     },
    //     {
    //       "word": "dfgsdfg",
    //       "duration": 1
    //     }
    //   ],
    //   "date_time": "22.12.2017 12:26",
    //   "id": 16
    // }
  ]
};
