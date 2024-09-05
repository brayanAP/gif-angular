import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsHomePageComponent } from './pages/home/home-page.component';
import { GifsSearchBoxComponent } from './components/search-box/search-box.component';
import { GifsCardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GifsHomePageComponent,
    GifsSearchBoxComponent,
    GifsCardListComponent,
    GifsCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [GifsHomePageComponent],
})
export class GifsModule {}
