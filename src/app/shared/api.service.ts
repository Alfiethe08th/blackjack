import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  flipbackground$ = new Subject();
  result = {};


  constructor() {
   }

   updateBackground(val:Boolean):void{
    this.flipbackground$.next(val);
   }

   getbackgroundListener():Observable<any>{
    return this.flipbackground$.asObservable();
   }


  //  getData(){
  //   const dataUrl = 'https://howtocreateapps.com/angular-tutorial-json';
  //   return  this.http.get<any>(dataUrl).subscribe((res)=>{
  //     this.result = res;
  //   });
  //  }

  }