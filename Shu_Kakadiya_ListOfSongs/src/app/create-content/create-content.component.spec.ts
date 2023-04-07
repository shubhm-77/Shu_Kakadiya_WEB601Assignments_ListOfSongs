import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { CreatecontentComponent } from './createcontent.component';

describe('CreatecontentComponent', () => {
  let component: CreatecontentComponent;
  let fixture: ComponentFixture<CreatecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecontentComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreatecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
