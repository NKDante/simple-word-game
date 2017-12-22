import {Injectable} from "@angular/core";
import {SimpleBackendService} from "../../services/simple-backend.service";

@Injectable()
export class GamePageService {

  public currentUser;
  public gameMode = false;
  public words;
  public numberOfTimeredWords;
  public timer;

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
    return this.backend.getCurrentWords()
      .then((data: any) => {
        this.words = data;

        return this.backend.getNumberOfTimeredWords();
      })
      .then((data: any) => {
        this.numberOfTimeredWords = data.value;

        return this.backend.getTimer();
      })
      .then((data: any) => {
        this.timer = data.value;
      });
  }

  saveHistory(history) {
    this.backend.saveHistory(history);
  }

}
