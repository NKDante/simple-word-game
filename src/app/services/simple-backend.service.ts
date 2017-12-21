import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SimpleBackendService {

  private mainUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {
  }

  getSmth() {
    return this.http
      .get<any>(this.mainUrl + "/posts")
      .toPromise();
  }

}
