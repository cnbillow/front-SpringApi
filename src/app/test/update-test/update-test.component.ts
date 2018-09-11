import { Component, OnInit } from '@angular/core';
import { Test } from '../../entity/test';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

	inscrition : Subscription;

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

       this.inscrition = this.activatedRoute.data.subscribe(
  		(info) => {
  		 	console.log(info.obTest['_body']);
  		}

  		);



  }

  ngOnDestroy(){
  	this.inscrition.unsubscribe();
  }


  update(testid: Test){

  	console.log("here");
  

  }

}
