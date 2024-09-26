import { Injectable } from '@angular/core';
import { OperationInterface } from '../interface/operation.interface';

@Injectable({
  providedIn: 'root'
})
export class OperationService implements OperationInterface {

  constructor() { }
  
  performOperation(param: string): number {
    throw new Error('Method not implemented.');
  }
}
