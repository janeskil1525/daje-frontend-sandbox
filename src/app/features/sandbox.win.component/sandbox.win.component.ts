import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

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
  value:string = "";

}
