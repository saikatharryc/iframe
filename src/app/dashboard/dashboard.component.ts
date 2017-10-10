import {Component, Input, OnInit} from '@angular/core';
import {INavElement} from "../model/navElement";
import {DataService} from "../services/data.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navElements: INavElement[];
  someObj: INavElement[];

  constructor(private dataService: DataService) {}

public  getnavElements(): void {
        this.dataService.getdata()
            .subscribe(
                navElements => {
                    this.navElements = navElements;
                    console.log("testing",this.navElements);
                              },
                            //Bind to view
       err => {
     // Log errors if any
    console.log(err);
 })
    }


    ngOnInit(): void {
    this.getnavElements();
    document.title = "iframe";
  }

}