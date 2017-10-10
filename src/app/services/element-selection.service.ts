import {Injectable} from '@angular/core';
import {INavElement} from "../model/navElement";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ElementSelectionService {
  // initial element is null. This is okay, because the elementSelectedSource will only be called in the following situations
  // 1. open dashboard (/navigation) and access a service -> selectedElementChanged(freshService) will be triggered anyway
  // 2. open service (/navigation/uuid) -> app component realizes the direct call of service and triggers selectedElementChanged(reloadedService)
  elementSelectedSource = new BehaviorSubject<INavElement>(null);
  elementSelected$ = this.elementSelectedSource.asObservable();
  elementSelectedAmount: number = 0;

  selectedElementChanged(selectedElement: INavElement) {
    this.elementSelectedAmount++;
    this.elementSelectedSource.next(selectedElement);
  }
}