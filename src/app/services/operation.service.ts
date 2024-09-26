import { Injectable } from '@angular/core';
import { OperationInterface } from '../interface/operation.interface';
import { CheckNonNumberString } from '../decorators/operation.decorator';

@Injectable({
  providedIn: 'root'
})
export class OperationService implements OperationInterface {

  constructor() { }

  @CheckNonNumberString()
  performOperation(param: string): number {
    return 0;
  }
}
