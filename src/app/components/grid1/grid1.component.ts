import { Component, OnInit } from '@angular/core';
import Grid from 'muuri';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss']
})
export class Grid1Component implements OnInit {

  grid: Grid;

  constructor() { }

  ngOnInit(): void {
    if (this.grid) return;
    this.grid = new Grid('.grid', {
      dragEnabled: true
    })
  }

  ngOnDestroy(): void {
    // this.grid.destroy();
  }

}
