import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LifeinsuredComponent } from './lifeinsured.component';

describe('LifeinsuredComponent', () => {
  let component: LifeinsuredComponent;
  let fixture: ComponentFixture<LifeinsuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeinsuredComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LifeinsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
