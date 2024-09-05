import { Component, Input, OnInit } from '@angular/core';
import { GiphySearchResponseData } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class GifsCardComponent implements OnInit {
  @Input()
  public gif!: GiphySearchResponseData;

  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif is required');
    }
  }
}
