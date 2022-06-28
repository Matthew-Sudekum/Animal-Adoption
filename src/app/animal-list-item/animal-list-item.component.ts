import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal-list-item',
  templateUrl: './animal-list-item.component.html',
  styleUrls: ['./animal-list-item.component.css']
})
export class AnimalListItemComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
