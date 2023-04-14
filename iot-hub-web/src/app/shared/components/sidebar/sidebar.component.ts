import {Component} from '@angular/core';
import {BaseComponent} from "../../interfaces/base.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends BaseComponent {

  constructor() {
    super();
  }

}
