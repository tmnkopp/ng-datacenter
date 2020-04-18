import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityItemComponent } from './entity-item.component';

describe('EntityItemComponent', () => {
  let component: EntityItemComponent;
  let fixture: ComponentFixture<EntityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
