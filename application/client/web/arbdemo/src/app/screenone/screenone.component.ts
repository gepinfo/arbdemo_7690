import { Component, OnInit } from '@angular/core';
import { ScreenoneService } from './screenone.service';

@Component({
  selector: 'app-screenone',
  templateUrl: './screenone.component.html',
  styleUrls: ['./screenone.component.scss'],
})

export class ScreenoneComponent implements OnInit {
    public entity:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
        name: '',
        age: '',
    }

    constructor (
        private screenoneService: ScreenoneService,
    ) { }

    ngOnInit() {
        this.entity.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.screenoneService.GpCreate(this.entity).subscribe((data:any) => {
            this.entity.name = ''
 	 	this.entity.age = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}