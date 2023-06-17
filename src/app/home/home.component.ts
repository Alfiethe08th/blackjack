import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { homescreenModel } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homescreenLabel = homescreenModel.HOME_SCREEN_LABEL;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    window.scrollTo(0,1000)
  }
  changeBackground(target:any){
    this.apiService.flipbackground$.next({switch:true, element:target});
  }
}
