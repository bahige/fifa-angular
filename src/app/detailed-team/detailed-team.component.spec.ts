import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTeamComponent } from './detailed-team.component';

describe('DetailedTeamComponent', () => {
  let component: DetailedTeamComponent;
  let fixture: ComponentFixture<DetailedTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
