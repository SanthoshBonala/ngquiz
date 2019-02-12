import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponent } from './quiz.component';
import { QuizModule } from '../quiz.module';
import { MatInputModule, MatIconModule, MatStepperModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizService } from '../_services/quiz.service';
import { DialogService } from 'src/app/_shared/dialog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuizComponent', () => {
    let component: QuizComponent;
    let fixture: ComponentFixture<QuizComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[
                MaterialModule,
                MatIconModule,
                FormsModule,
                ReactiveFormsModule,
                MatInputModule,
                RouterTestingModule,
                MatStepperModule,
                HttpClientTestingModule
            ],
            declarations: [QuizComponent],
            providers:[
                {
                    provide: QuizService, useValue: []
                },
                {
                    provide: DialogService, useValue: []
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuizComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('my quiz should create', () => {
        expect(component).toBeDefined();
    });
});