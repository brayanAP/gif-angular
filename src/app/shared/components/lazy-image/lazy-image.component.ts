import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public src!: string;

  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.src) {
      throw new Error('Src is required');
    }
  }

  public onLoad(): void {
    this.hasLoaded = true;
  }
}
