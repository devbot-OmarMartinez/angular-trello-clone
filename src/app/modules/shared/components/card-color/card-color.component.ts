import { Component, Input, OnInit } from '@angular/core';
import { COLORS, Color } from '@models/colors.model';

@Component({
  selector: 'app-card-color',
  templateUrl: './card-color.component.html'
})
export class CardColorComponent {

  @Input() color: Color = 'sky';

  mapColors = COLORS

  constructor() { }

  get colors() {
    const classes = this.mapColors[this.color];
    return classes ? classes : {};
  }

}
