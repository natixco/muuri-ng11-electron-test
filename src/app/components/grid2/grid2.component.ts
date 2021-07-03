import { Component, OnInit } from '@angular/core';
import Grid from 'muuri';

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrls: ['./grid2.component.scss']
})
export class Grid2Component implements OnInit {

  grid: Grid;

  constructor() { }

  ngOnInit(): void {
    if (this.grid) return
    this.grid = new Grid('.grid', {
      dragEnabled: true
    })
  }

  ngOnDestroy(): void {
    // this.grid.destroy();
  }

}
