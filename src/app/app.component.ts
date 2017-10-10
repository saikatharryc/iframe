import {Component} from '@angular/core';
import {getMockNavElements, getNavElementById, INavElement} from "./model/navElement";
import {ElementSelectionService} from "./services/element-selection.service";
import {Router} from "@angular/router";
import {trigger, style, animate, transition, state} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ElementSelectionService],
  animations: [
    trigger(
      'fadeInMobileNav',
      [
        state('*', style({
          opacity: 1,
        })),
        state('void',   style({
          opacity: 0,
        })),
        transition('void => *', animate('400ms')),
        transition('* => void', animate('400ms'))]
    )
  ]
})
export class AppComponent {
  isDashboard: boolean = true;
  isContentViewer: boolean = false;
  isMobileNavClicked: boolean = false;
  selectedElement: INavElement;

  constructor(private elementSelectionService: ElementSelectionService, private router: Router) {
    elementSelectionService.elementSelected$.subscribe((selectedElement: INavElement) => {
      if (elementSelectionService.elementSelectedAmount !== 0) {
        this.isDashboard = false;
        this.isContentViewer = true;
        this.selectedElement = selectedElement;
      }
    });

    // in case content-viewer is loaded on init (e.g. bookmark, refresh, shared link, ..)
    if (window.location.pathname.match(/^.*[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
      this.isDashboard = false;
      this.isContentViewer = true;

      let uuid = window.location.pathname.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)[0];
      let reloadedElement: INavElement = getNavElementById(uuid);
      elementSelectionService.selectedElementChanged(reloadedElement);
      this.selectedElement = reloadedElement;
     // console.log(Element reloaded: ${reloadedElement.id});
    }
  }

  onClickBack() {
    this.isContentViewer = false;
    this.isDashboard = true;
    this.router.navigate(['/']);
  }

  onClickMobileNav() {
    this.isMobileNavClicked = !this.isMobileNavClicked;
  }

  onClickMobileNavItem() {
    this.onClickBack();
    this.onClickMobileNav();
  }
}