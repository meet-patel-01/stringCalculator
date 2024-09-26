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

  /* empty string, non digit */
  
  it('should return 0', () => {
    expect(service.performOperation('')).toEqual(0);
  })

  it('should return 0', () => {
    expect(service.performOperation('there is no number in string // \\ \n">')).toEqual(0);
  })
});
