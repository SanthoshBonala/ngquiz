import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootComponent } from './root.component';
import { MaterialModule } from '../material';
import { RouterTestingModule } from '@angular/router/testing';

describe('RootComponent', () => {
    let component: RootComponent;
    let fixture: ComponentFixture<RootComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[
                MaterialModule,
                RouterTestingModule
            ],
            declarations: [RootComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RootComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});