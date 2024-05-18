import { Component } from '@angular/core';
import {NgxParallaxModule} from "@yoozly/ngx-parallax";

@Component({
  selector: 'app-home-component',
  standalone: true,
    imports: [
        NgxParallaxModule
    ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
