import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ContentListComponent} from "./content-list/content-list.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContentListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Par_Vandra_MyFavouriteCricketPlayer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Par_Vandra_MyFavouriteCricketPlayer');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Par_Vandra_MyFavouriteCricketPlayer app is running!');
  });
});
