import { Component, input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {DatabaseService} from "../../core/database/database.service";
import { ResponseService } from "../../core/response/response.service";

@Component({
  selector: 'app-sandbox-win-component',
  imports: [
      InputTextModule,
      FormsModule
  ],
  templateUrl: './sandbox.win.component.html',
  styleUrl: './sandbox.win.component.css',
})
export class SandboxWinComponent {
  payload:any = {};
    tools_object_pkey:number = 6;

  constructor(
      private dbservice:DatabaseService,
      private responseservice: ResponseService
  ){}
    object = input.required<any>();

  ngOnInit(){

      this.dbservice.load_record('Object', 6).subscribe((response)=> {
          this.responseservice.sendResponse(response);
          let access = (key: string) => {
              return response[key as keyof typeof response];
          };
          this.payload = Object.assign({}, access("data")) ;
          if(this.payload.active) this.payload.active = true;

      })
  }
}
