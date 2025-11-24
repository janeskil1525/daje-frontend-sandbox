import { Routes } from '@angular/router';
import { MainComponent } from "./features/main/main.component/main.component";
import {SandboxWinComponent} from "./features/sandbox.win.component/sandbox.win.component";

export const routes: Routes = [


    {
        path: 'main',
        component: MainComponent,
        title: 'Main',
        children:[
            {
                path: 'test',
                component: SandboxWinComponent,
                title: 'Sandbox',
                outlet:'middle_split',
                children:[
                                    ]
            },
        ]
    },
    {
        path:'',
        redirectTo:'/main',
        pathMatch: 'full'
    }
];