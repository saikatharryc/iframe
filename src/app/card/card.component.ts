import {Component, Input, OnInit} from '@angular/core';
import {INavElement} from "../model/navElement";
import {ElementSelectionService} from "../services/element-selection.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() navElement: INavElement;

  constructor(private elementSelectionService: ElementSelectionService, private router: Router) {
  }

  ngOnInit() {
  }

  onClickCard() {
      this.elementSelectionService.selectedElementChanged(this.navElement);
   this.router.navigate(['/test', this.navElement.id]);
   //window.open(`/navigation/${this.navElement.id}`, '_blank') 
  }
}