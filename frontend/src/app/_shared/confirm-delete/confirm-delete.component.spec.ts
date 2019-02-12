import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteComponent } from './confirm-delete.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';

describe('ConfirmDeleteComponent', () => {
    let component: ConfirmDeleteComponent;
    let fixture: ComponentFixture<ConfirmDeleteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[
                MatDialogModule
            ],
            declarations: [ConfirmDeleteComponent],
            providers:[
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: []
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmDeleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});