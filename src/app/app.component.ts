import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OPERATION_SERVICE } from './constants/operation.constant';
import { OperationService } from './services/operation.service';
import { FormsModule } from '@angular/forms';
import { OperationInterface } from './interface/operation.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  providers: [
    {
      provide: OPERATION_SERVICE,
      useClass: OperationService
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputValue: string = '';
  result: string | number = '';

  constructor(@Inject(OPERATION_SERVICE) private operationService: OperationInterface){
  }

  performOperation(argument: string): void {
    /*
    * here it comes to my attention that string from input-box and passing in param in spec file, is different,
    * so \n was not considered as as form of string not as new line, so that's the reason why regex was not working.
    */
    this.result = this.operationService.performOperation(argument.replace(/\\n/g, '\n'));
  }
}
