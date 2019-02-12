import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import { MaterialModule } from 'src/app/material';
import { MatIconModule, MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { QuestionsService } from 'src/app/_shared/questions.service';
import { DialogService } from 'src/app/_shared/dialog.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('QuestionsComponent', () => {
    let component: QuestionsComponent;
    let fixture: ComponentFixture<QuestionsComponent>;

    const data =  [
        {
            name: "name",
            answer: "answer"
        }
    ]

    let questionsServiceMock = {
        "allQuestion": of(
            {
                "_embedded": {
                    "questions": data
                }
            }
        )
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[
                MaterialModule,
                MatIconModule,
                RouterTestingModule,
                MatInputModule,
                BrowserAnimationsModule
            ],
            declarations: [QuestionsComponent],
            providers:[
                {
                    provide: QuestionsService, useValue: questionsServiceMock
                },
                {
                    provide: DialogService, useValue: []
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("should have the values sent through mock service", () =>{
        expect(component.questions.length).toBeGreaterThanOrEqual(1)
        expect(component.questions).toEqual(data)        
    })

    it("Filtered questions should be equal to total question when there is no search key", () =>{
        expect(component.questions).toEqual(component.filteredQuestions)
    })

    it("Filter questions using a search term", () =>{
        component.searchQuestionsWithText("name")
        expect(component.filteredQuestions).toEqual(component.questions)
    })

    it("Filter questions should be empty when text is not present", () =>{
        component.searchQuestionsWithText("akjf")
        expect(component.filteredQuestions.length).toEqual(0)
    })

});