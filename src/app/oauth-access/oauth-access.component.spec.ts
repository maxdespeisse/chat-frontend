import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthAccessComponent } from './oauth-access.component';

describe('OauthAccessComponent', () => {
  let component: OauthAccessComponent;
  let fixture: ComponentFixture<OauthAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
