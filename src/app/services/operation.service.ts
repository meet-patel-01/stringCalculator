import { Injectable } from '@angular/core';
import { OperationInterface } from '../interface/operation.interface';
import {
  CheckNegativeNumberString,
  CheckSingleNumberString,
} from '../decorators/operation.decorator';

@Injectable({
  providedIn: 'root',
})
export class OperationService implements OperationInterface {
  constructor() {}

  /**
   * @CheckNonNumberString is responsible to check if there is number in string or not,
   * do don't need it as per our new changes.
   */
  // @CheckNonNumberString() 
  @CheckSingleNumberString()
  @CheckNegativeNumberString()
  /**
   * @FilterNumberString is responsible to extract number from string,
   * since we also need to pass delimiter we don't need it.
  */
  // @FilterNumberString()

  performOperation(param: string): number | string {
    const delimiter = param.match(/\/\/(.*?)\n/g);
    const filterNumber = param.match(/\d+(\.\d+)?/g);
    let delimiterList: string[] | null = null;
    
    delimiterList = delimiter?.map((match) => match.slice(2, -1)) || null;
    /**
     * delimiter will hold the "delimiter" value in form of array.
     * filterNumber hold the numeric value from the string.
     * delimiterList will filter out "//" and "\n", and gives actual delimiter in form of array.
    */
    
    if (filterNumber) {
      let returnString: string = eval(filterNumber.join(',').replaceAll(',', '+'))
      if(delimiterList?.length){
        returnString += ' with delimiter ' + delimiterList.join(' ')
      }
      return returnString;
    }
    return 0;
  }
}
