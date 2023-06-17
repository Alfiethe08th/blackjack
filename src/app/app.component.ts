import { Component, ViewEncapsulation } from '@angular/core';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'pickyourcolor';
  backgroundImagePath = ['../assets/images/building.jpg', '../assets/images/twin.jpg', '../assets/images/pole.jpg']; 
  pathIndex = 0;
  constructor(private apiService: ApiService){
  }

  ngOnInit(){
    document.body.style.background = `url("` + this.backgroundImagePath[this.pathIndex] +  `")`;
    this.apiService.getbackgroundListener().subscribe(event=>{
      if(event.switch==true){
        this.pathIndex = this.pathIndex<2?this.pathIndex+1:this.pathIndex-1;
        document.body.style.background = `url("` + this.backgroundImagePath[this.pathIndex] +  `")`;
        if(this.pathIndex==2){
            // event.element.scrollIntoView();
            window.scrollTo(0,1000)
        }
      }
    });
  }
}
