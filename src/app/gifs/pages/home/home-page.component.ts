import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GiphySearchResponseData } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class GifsHomePageComponent {
  constructor(private gifsService: GifsService) {}

  public get gifsList(): GiphySearchResponseData[] {
    return this.gifsService.giftsList;
  }
}
