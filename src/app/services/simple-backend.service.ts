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
    {"word": "целтниса", "id": 1},
    {"word": "стэконап", "id": 2},
    {"word": "бжиканум", "id": 3},
    {"word": "ниафслит", "id": 4},
    {"word": "кнвияаса", "id": 5},
    {"word": "окирьпус", "id": 6},
    {"word": "рукшваат", "id": 7},
    {"word": "олкочбоа", "id": 8},
    {"word": "ннмииаве", "id": 9},
    {"word": "брилунат", "id": 10},
    {"word": "агрдорбе", "id": 11},
    {"word": "тсоткучь", "id": 12},
    {"word": "сарукнип", "id": 13},
    {"word": "арнпсить", "id": 14},
    {"word": "апоитезг", "id": 15},
    {"word": "такучсин", "id": 16},
    {"word": "згманиум", "id": 17},
    {"word": "граизном", "id": 18},
    {"word": "яивирсед", "id": 19},
    {"word": "лтаианик", "id": 20},
    {"word": "аиблукдт", "id": 21},
    {"word": "сялтхоко", "id": 22},
    {"word": "кьджости", "id": 23},
    {"word": "альгстно", "id": 24},
    {"word": "жлианокз", "id": 25},
    {"word": "нпегосад", "id": 26},
    {"word": "атвазкса", "id": 27},
    {"word": "идарицтя", "id": 28},
    {"word": "оозлятир", "id": 29},
    {"word": "урткиент", "id": 30},
    {"word": "циниуият", "id": 31},
    {"word": "скоптэрм", "id": 32},
    {"word": "тордикен", "id": 33},
    {"word": "мфагтнер", "id": 34},
    {"word": "инилбатр", "id": 35},
    {"word": "ениблара", "id": 36},
    {"word": "каздгаар", "id": 37},
    {"word": "мамзнихе", "id": 38},
    {"word": "ретигмек", "id": 39},
    {"word": "кйаакемс", "id": 40}
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
