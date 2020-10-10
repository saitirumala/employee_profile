import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { StoreService } from './store.service';

describe('StoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterTestingModule]
  }));

  it('should be created', () => {
    const service: StoreService = TestBed.get(StoreService);
    expect(service).toBeTruthy();
  });
});
