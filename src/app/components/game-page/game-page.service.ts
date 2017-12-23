import {Injectable} from "@angular/core";
import {SimpleBackendService} from "../../services/simple-backend.service";

@Injectable()
export class GamePageService {

  public currentUser;
  public gameMode = false;
  public words;
  public numberOfTimeredWords;
  public timer;
  public finishMode = false;
  public previousHistory;

  constructor(private backend: SimpleBackendService) {
  }

  initNewUser() {
    this.currentUser = {
      name: "",
      age: "",
      sex: "",
      description: ""
    };
  }

  startGame() {
    this.gameMode = true;
  }

  getWords() {
    // return this.backend.getCurrentWords()
    this.words = this.backend.getCurrentWords();
    this.numberOfTimeredWords = this.backend.getNumberOfTimeredWords();
    this.timer = this.backend.getTimer();
  }

  saveHistory(history) {
    this.backend.saveHistory(history);
  }

}
