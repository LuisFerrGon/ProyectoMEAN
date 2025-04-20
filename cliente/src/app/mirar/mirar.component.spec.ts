import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirarComponent } from './mirar.component';

describe('MirarComponent', () => {
  let component: MirarComponent;
  let fixture: ComponentFixture<MirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MirarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
