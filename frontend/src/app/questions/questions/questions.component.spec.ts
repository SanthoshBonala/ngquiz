import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import { MaterialModule } from 'src/app/material';
import { MatIconModule, MatInputModule } from '@angular/material';
import { QuestionsService } from 'src/app/_shared/questions.service';
import { DialogService } from 'src/app/_shared/dialog.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';

let router = {
    navigate: ()=>{
       console.log("called")
    }
}
describe('QuestionsComponent', () => {
    let component: QuestionsComponent;
    let fixture: ComponentFixture<QuestionsComponent>;

    const data =  [
        {
            name: "name",
            answer: "answer"
        },
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
                },
                {
                    provide: ActivatedRoute, useValue: "/admin/questions"
                },
                {
                    provide: Router, useValue: router
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
        expect(component.questions.length).toBeGreaterThanOrEqual(data.length)
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

    it("on clicking add questions go to add questions", () =>{
        console.log(router)
        let spy = spyOn(router, "navigate").and.callThrough();
        component.addQuestion()
        expect(spy).toHaveBeenCalled()
        //expect(spy).toHaveBeenCalledWith(['..', 'question', 'edit'], {relativeTo: "/admin/questions"})
    })

    it("check whether DOM has the questions", () =>{
        fixture.detectChanges()
        const ele: HTMLElement = fixture.nativeElement;
        expect(ele.querySelector("ol").childElementCount).toBe(data.length)
    })

});