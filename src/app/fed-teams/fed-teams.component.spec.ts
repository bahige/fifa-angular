import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FedTeamsComponent } from './fed-teams.component';

describe('FedTeamsComponent', () => {
  let component: FedTeamsComponent;
  let fixture: ComponentFixture<FedTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FedTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FedTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
