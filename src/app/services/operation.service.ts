import { Injectable } from '@angular/core';
import { OperationInterface } from '../interface/operation.interface';
import { CheckNonNumberString, CheckSingleNumberString, FilterNumberString } from '../decorators/operation.decorator';

@Injectable({
  providedIn: 'root'
})
export class OperationService implements OperationInterface {

  constructor() { }

  @CheckNonNumberString()
  @CheckSingleNumberString()
  @FilterNumberString()
  performOperation(param: string): number {
    console.log('main >', param)
    return eval(param.replaceAll(',', '+'));
  }
}
