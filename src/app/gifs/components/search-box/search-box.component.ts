import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class GifsSearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  public searchTag(): void {
    const newTabInput = this.tagInput.nativeElement.value;
    this.gifsService.addTagToHistory(newTabInput);
    this.tagInput.nativeElement.value = '';
  }
}
