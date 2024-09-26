import { TestBed } from '@angular/core/testing';

import { OperationService } from './operation.service';

describe('OperationService', () => {
  let service: OperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /* empty string */
  it('should return 0', () => {
    expect(service.performOperation('')).toEqual(0);
  });

  /* non digit string */
  it('should return 0', () => {
    expect(service.performOperation('there is no number in string // \\ \n">')).toEqual(0);
  });
  
  /* single digit string */
  it('should return 1', () => {
    expect(service.performOperation('there is no number in string // \\ \n"> 1')).toEqual(1);
  });

  /* number string with \n */
  it('should return 6', () => {
    expect(service.performOperation('1,2\n3')).toEqual(6);
  });
});
