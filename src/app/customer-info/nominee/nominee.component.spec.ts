import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NomineeComponent } from './nominee.component';

describe('NomineeComponent', () => {
  let component: NomineeComponent;
  let fixture: ComponentFixture<NomineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomineeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
