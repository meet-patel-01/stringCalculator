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

  /* number string with negative number */
  it('should return \'negative numbers not allowed\'', () => {
    expect(service.performOperation('-1, -2\n3')).toEqual('negative numbers not allowed -1, -2');
  });

  /* number string with negative number with delimiter*/
  it('should return \'negative numbers not allowed\'', () => {
    expect(service.performOperation('//;\n-1, -2\n3')).toEqual('negative numbers not allowed -1, -2');
  });

  /* number string with delimiter */
  it('should return 5', () => {
    expect(service.performOperation('\n2\n3')).toEqual(5);
  });

  /* return delimiters along with sum  */
  it('should return 5 with delimiter ; ', () => {
    expect(service.performOperation('//;\n2\n3')).toEqual('5 with delimiter ;');
  });
});
