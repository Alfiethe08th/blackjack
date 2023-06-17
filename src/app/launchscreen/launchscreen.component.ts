import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { launchscreenModel } from './launchscreen.model';
@Component({
  selector: 'app-launchscreen',
  templateUrl: './launchscreen.component.html',
  styleUrls: ['./launchscreen.component.scss']
})
export class LaunchscreenComponent implements OnInit {

  iDisagree = false;
  constructor(private router: Router) { }
  disclosureLabel = launchscreenModel.DISCLOSURE_LABEL;

  ngOnInit(): void {
  }

  handleDisclosure(action:any){
    if(action==="I Agree"){
      console.log('you clicked: ', action)
      this.router.navigate(['/home']);
    }else{
      this.iDisagree = true;
    }
  }

  returnHome(){
    this.iDisagree = false;
  }
}
