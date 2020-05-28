import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterplatPage } from './ajouterplat.page';

describe('AjouterplatPage', () => {
  let component: AjouterplatPage;
  let fixture: ComponentFixture<AjouterplatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterplatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterplatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
