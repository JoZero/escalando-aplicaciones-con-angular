import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { GroupService } from './group.service';
import { environment } from 'src/environments/environment';
=======
import { GroupService } from './group.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { Group } from '../core/models/group-interface';
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5

class HttpClientMock {
  get = jasmine.createSpy();
}
<<<<<<< HEAD

describe('GroupService', () => {
  let service: GroupService;
  let httpClientMock: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        GroupService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.get(GroupService);
    httpClientMock = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('should call http get service', () => {
    httpClientMock.get.and.returnValue({
      toPromise() {}
    });

    service.getGroups();

    expect(httpClientMock.get).toHaveBeenCalledWith(environment.endpoint.groups);
=======

fdescribe('Group Service', () => {
  let service: GroupService;
  let httpClientMock: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        GroupService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.get(GroupService);
    httpClientMock = TestBed.get(HttpClient);
  });

  it('Should create an instance', () => {
    expect(service).toBeDefined();
  });

  it('should call http get service', () => {
    httpClientMock.get.and.returnValue(of({ list: [] }));
    service.getGroups();
    expect(httpClientMock.get).toHaveBeenCalledWith(environment.endpoint.groups);
  });

  it('should set and get', () => {
    const list: Group[] = [
      { id: 'A', value: 'Grupo A', active: true },
      { id: 'B', value: 'Grupo B', active: true },
    ];

    service.setGroups(list);

    expect(service.getStoredGroups()).toEqual(list);
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
  });
});
