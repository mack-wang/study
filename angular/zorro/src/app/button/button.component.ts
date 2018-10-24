import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zr-button',
  template: `
    <button nz-button [nzType]="status ? 'primary' : 'default'" (click)="say()">Primary</button>
    <button nz-button nzType="default"><i nz-icon type="search"></i>Search</button>
    <i nz-icon type="search" theme="outline"></i>
    <button nz-button nzSize="small" nzType="primary">Primary</button>
    <button nz-button nzSize="large" nzType="default">Default</button>
    <button nz-button nzType="default">Default</button>
    <button nz-button nzType="dashed" [nzGhost]="true">Dashed</button>
    <button nz-button nzType="danger">Danger</button>`,

  styles  : [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `
  ]
})
export class ButtonComponent implements OnInit {

  status: boolean

  constructor() { }

  say(){
    this.status = !this.status
    console.log('hello')
  }

  ngOnInit() {
  }

}
