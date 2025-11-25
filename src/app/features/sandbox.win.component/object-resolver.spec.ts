import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { objectResolver } from './object-resolver';

describe('objectResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => objectResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
