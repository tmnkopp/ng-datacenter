import { Component, OnInit, Input } from '@angular/core';
import {item} from '../models/item.model';
@Component({
  selector: '[app-entity-item]',
  templateUrl: './entity-item.component.html',
  styleUrls: ['./entity-item.component.css']
})
 
export class EntityItemComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}
