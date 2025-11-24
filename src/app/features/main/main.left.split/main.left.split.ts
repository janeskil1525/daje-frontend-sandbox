import { Component, inject } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import {RouterModule, Router} from "@angular/router";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-main-left-split',
    imports: [
        DividerModule,
        ButtonModule
    ],
  templateUrl: './main.left.split.html',
  styleUrl: './main.left.split.scss',
    standalone:true,
})
export class MainLeftSplit {
    private router = inject(Router);

    load(){
        this.router.navigate(['main',{ outlets: { middle_split: ['test'] } } ]);
    }
}
