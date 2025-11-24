import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxWinComponent } from './sandbox.win.component';

describe('SandboxWinComponent', () => {
  let component: SandboxWinComponent;
  let fixture: ComponentFixture<SandboxWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandboxWinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandboxWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
