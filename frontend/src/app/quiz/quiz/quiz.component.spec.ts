import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponent } from './quiz.component';
import { MaterialModule } from 'src/app/material';
import { QuestionsService } from 'src/app/_shared/questions.service';
import { of } from 'rxjs';

describe('QuizComponent', () => {
    let component: QuizComponent;
    let fixture: ComponentFixture<QuizComponent>;
    let questionsServiceMock = {
        "allQuestion": of([])
    }
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[
                MaterialModule
            ],
            declarations: [QuizComponent],
            providers: [
                {
                    provide: QuestionsService,
                    useValue: questionsServiceMock        
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

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});