import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';
import { AccountBookFill, SearchOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private iconService: NzIconService) {
    // Import what you need.
    this.iconService.addIcon(...[ AccountBookFill, SearchOutline ]);
    this.iconService.twoToneColor = { primaryColor: '#1890ff' };
  }
  title = 'zorro';
}
