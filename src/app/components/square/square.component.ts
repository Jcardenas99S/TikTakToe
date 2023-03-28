import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit{
  
  @Input() value: 'X' | 'O' | undefined;

  back='btn-secondary';

  ngOnInit(){
    this.background();
  }

  background(){
    this.back="btn-secondary"
    if(this.value == 'X'){
      this.back="btn-danger"
    }
    if(this.value == 'O'){
      this.back="btn-warning"
    }
      
    }
  
  
  
}
