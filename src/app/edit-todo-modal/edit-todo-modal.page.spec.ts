import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTodoModalPage } from './edit-todo-modal.page';

describe('EditTodoModalPage', () => {
  let component: EditTodoModalPage;
  let fixture: ComponentFixture<EditTodoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTodoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
