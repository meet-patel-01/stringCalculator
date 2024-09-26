import { Injectable } from '@angular/core';
import { OperationInterface } from '../interface/operation.interface';
import { CheckNegativeNumberString, CheckNonNumberString, CheckSingleNumberString, FilterNumberString } from '../decorators/operation.decorator';

@Injectable({
  providedIn: 'root'
})
export class OperationService implements OperationInterface {

  constructor() { }

  @CheckNonNumberString()
  @CheckSingleNumberString()
  @CheckNegativeNumberString()
  @FilterNumberString()
  performOperation(param: string): number | string {
    return eval(param.replaceAll(',', '+'));
  }
}
