import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  dataArray :any = []
  constructor() { }
  setMessage( data ){
    this.dataArray = data
  }
  getMassage(){
    return this.dataArray
  }
}
