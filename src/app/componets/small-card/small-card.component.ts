import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = "https://sm.ign.com/ign_br/lists/t/the-10-hig/the-10-highest-grossing-marvel-movies-of-all-time_n2xs.jpg"

  @Input()
  cardTitle: string = ""

  @Input()
  id:string='0'
  constructor() { }

  ngOnInit(): void {
  }

}
