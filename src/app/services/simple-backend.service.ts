import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SimpleBackendService {

  private mainUrl = "http://localhost:3000";
  private thesaurusUrl = this.mainUrl + "/thesaurus";
  private timerUrl = this.mainUrl + "/timer";
  private historyUrl = this.mainUrl + "/history";

  constructor(private http: HttpClient) {
  }

  getSmth() {
    return this.http
      .get<any>(this.mainUrl + "/posts")
      .toPromise();
  }

  getCurrentWords() {
    return this.http
      .get<any>(this.thesaurusUrl)
      .toPromise();
  }

  deleteWord(word: any) {
    return this.http
      .delete(`${this.thesaurusUrl}/${word.id}`)
      .toPromise();
  }

  saveWord(word) {
    return this.http
      .post(this.thesaurusUrl, word)
      .toPromise();
  }

  changeWord(word) {
    return this.http
      .put(`${this.thesaurusUrl}/${word.id}`, word)
      .toPromise();
  }

  getTimer() {
    return this.http
      .get(this.timerUrl)
      .toPromise();
  }

  saveTimer(timer) {
    return this.http
      .put(this.timerUrl, timer)
      .toPromise();
  }

  getNumberOfTimeredWords() {
    return this.http
      .get(`${this.mainUrl}/timered_words`)
      .toPromise();
  }

  saveNumberOfTimeredWords(timered) {
    return this.http
      .put(`${this.mainUrl}/timered_words`, timered)
      .toPromise();
  }

  saveHistory(history) {
    return this.http
      .post(this.historyUrl, history)
      .toPromise();
  }

  getHistory() {
    return this.http
      .get(this.historyUrl)
      .toPromise();
  }

  deleteRecord(item) {
    return this.http
      .delete(`${this.historyUrl}/${item.id}`)
      .toPromise();
  }
}

