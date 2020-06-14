import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersModalComponent } from './players-modal.component';

describe('PlayersModalComponent', () => {
  let component: PlayersModalComponent;
  let fixture: ComponentFixture<PlayersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
