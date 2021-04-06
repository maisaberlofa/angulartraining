import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  modal: any;

  cardTitle: string;
  cardContent: string;
  cardLink: string;

  cardString: string = "";
  htmlString: string = "";

  constructor(private angular2MaterializeService: Angular2MaterializeV1Service, private sanitizer: DomSanitizer, private sv: HomePageService){}

  ngOnInit(): void {
  }

  public addNewCard(): void {
    this.htmlString = (`
    <div class="input-field col l4">
      <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="assets/images/1.jpg">
          </div>
          <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">`+ this.cardTitle + `<i
                      class="material-icons right">more_vert</i></span>
              <p><a href="`+ this.cardLink + `">`+ this.cardLink + `</a></p>
          </div>
          <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">`+ this.cardTitle + `<i
                      class="material-icons right">close</i></span>
              <p>`+ this.cardContent + `</p>
          </div>
      </div>
    </div>`);
    this.cardString += this.htmlString;
  }

  public ngAfterViewInit(): void {
    this.angular2MaterializeService.autoInit();
    this.angular2MaterializeService.initModal('#modal');
    this.angular2MaterializeService.initCharacterCount('#cardcontent'); //é o componente id="cardcontent" mesmo, não o #cardcontent
  }

  ngAfterViewChecked() {
  }
}