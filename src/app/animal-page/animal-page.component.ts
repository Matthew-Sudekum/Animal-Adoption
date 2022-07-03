import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.css']
})
export class AnimalPageComponent implements OnInit {

  @Input() animal: any;
  container!:any;
  hidden:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    this.container = document.getElementById("container");
  }

  toggleDisplay() {
    this.hidden = !this.hidden;
  }

}
