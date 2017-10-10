import {Injectable} from '@angular/core';
import { Http, Headers, Response ,RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {INavElement} from "../model/navElement";
import { environment } from '../../environments/environment';


@Injectable()
export class DataService {
  public test1 : any;
public bhar : any;


  private baseUrl: string = environment.envName;

 constructor (private http: Http) { }  
    getdata(): Observable<INavElement[]> { 
        return this.http.get(this.baseUrl)
          .map((response:Response) => response.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}