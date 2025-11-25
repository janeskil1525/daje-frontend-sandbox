import { Routes } from '@angular/router';
import { MainComponent } from "./features/main/main.component/main.component";
import {SandboxWinComponent} from "./features/sandbox.win.component/sandbox.win.component";
import {objectResolver} from "./features/sandbox.win.component/object-resolver";

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
                resolve: {
                    object: objectResolver,
                },
                children:[]
            },
        ]
    },
    {
        path:'',
        redirectTo:'/main',
        pathMatch: 'full'
    }
];