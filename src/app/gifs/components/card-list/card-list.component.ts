import { Component, Input } from '@angular/core';
import { GiphySearchResponseData } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class GifsCardListComponent {
  @Input()
  public gifsList: GiphySearchResponseData[] = [];
}
