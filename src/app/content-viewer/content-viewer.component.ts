import {Component, Input, OnInit} from '@angular/core';
import {ElementSelectionService} from "../services/element-selection.service";
import {getMockNavElements, INavElement} from "../model/navElement";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.scss']
})
export class ContentViewerComponent implements OnInit {
  @Input() selectedElement: INavElement;

  constructor(private elementSelectionService: ElementSelectionService) {
    elementSelectionService.elementSelected$.subscribe((selectedElement: INavElement) => {
      this.selectedElement = selectedElement;
      document.title = 'iframe- ${this.selectedElement.name}';
    })

  }

  ngOnInit() {
  }
}