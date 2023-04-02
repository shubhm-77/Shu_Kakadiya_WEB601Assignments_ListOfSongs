import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// @ts-ignore
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
// @ts-ignore
import { ContentFilterPipe } from './content-list/content-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { FilterContentPipe } from "./filter-content.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentFilterPipe,
    HoverAffectDirective,
    FilterContentPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
