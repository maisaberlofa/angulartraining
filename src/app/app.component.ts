import { Component } from '@angular/core';

import {Angular2MaterializeV1Service} from 'angular2-materialize-v1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';

  constructor(private angular2MaterializeService: Angular2MaterializeV1Service) {}
 
  public ngAfterViewInit(): void {
    this.angular2MaterializeService.autoInit();
  }
}
