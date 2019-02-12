import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionComponent } from './add-question.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule } from '@angular/material';
import { QuestionsService } from 'src/app/_shared/questions.service';
import { DialogService } from 'src/app/_shared/dialog.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddQuestionComponent', () => {
    let component: AddQuestionComponent;
    let fixture: ComponentFixture<AddQuestionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[
                ReactiveFormsModule,
                RouterTestingModule,
                MaterialModule,
                MatIconModule,
                FormsModule,
                MatInputModule,
                BrowserAnimationsModule
            ],
            declarations: [AddQuestionComponent],
            providers:[
                { 
                    provide: QuestionsService,
                    useValue: {}
                },
                { 
                    provide: DialogService,
                    useValue: {}
                },
                
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddQuestionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});