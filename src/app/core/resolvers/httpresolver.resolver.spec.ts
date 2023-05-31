import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { httpresolverResolver } from './httpresolver.resolver';

describe('httpresolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => httpresolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
