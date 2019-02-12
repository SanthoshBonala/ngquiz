import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialogComponent } from './custom-dialog.component';
import { MaterialModule } from 'src/app/material.module';
import { MAT_DIALOG_DATA } from '@angular/material';

describe('CustomDialogComponent', () => {
    let component: CustomDialogComponent;
    let fixture: ComponentFixture<CustomDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[
                MaterialModule
            ],
            declarations: [CustomDialogComponent],
            providers:[
                {
                    provide: MAT_DIALOG_DATA, useValue: []
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});