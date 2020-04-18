import { Component, OnInit, Input } from '@angular/core'; 
import { HttpClient } from "@angular/common/http";
import {item} from '../models/item.model';
 
@Component({
  selector: 'app-entity-wrapper',
  templateUrl: './entity-wrapper.component.html',
  styleUrls: ['./entity-wrapper.component.css']
})
 

export class EntityWrapperComponent implements OnInit {

  public items : item[] ;

  public title: string = 'init';
  public result: string = '';
  constructor(private http: HttpClient) { 

  }
  onSubmit(){
    console.log( 'onSubmit1 => '+  this.title  ) 
  }
  ngOnInit() {
    console.log( 'ngOnInit => '+   this.title  )
    this.http.get<item[]>('http://som/settings.json').subscribe(res => {
      this.items = res;
    }, error => console.error(error));
    //http://som/settings.json
  }

}
