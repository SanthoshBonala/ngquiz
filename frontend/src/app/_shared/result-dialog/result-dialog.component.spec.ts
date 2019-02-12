import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDialogComponent } from './result-dialog.component';
import { MaterialModule } from 'src/app/material.module';
import { MAT_DIALOG_DATA } from '@angular/material';

describe('ResultDialogComponent', () => {
    let component: ResultDialogComponent;
    let fixture: ComponentFixture<ResultDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[
                MaterialModule
            ],
            declarations: [ResultDialogComponent],
            providers:[
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {}
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});