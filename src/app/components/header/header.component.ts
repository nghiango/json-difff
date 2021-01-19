import { currentPath, fileOptions } from './../../shared/global-variable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'json-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentPath: string;
  public isDashBoard: boolean;
  public isJsonTree: boolean;

  constructor(
    private route: Router
    ) { }

  ngOnInit() {
    currentPath.next('');
    currentPath.subscribe(currentPath => {
      if (currentPath === 'json-tree') {
        this.isDashBoard = false;
        this.isJsonTree = true;
      }
      if (!currentPath) {
        this.isDashBoard = true;
        this.isJsonTree = false;
      }
    });
  }

  backToDashBoard() {
    this.route.navigate(['/dashboard']);
  }

  public setDoubleQuote(checked) {
    fileOptions.doubleQuote = checked;
  }
  public setFlattenJson(checked) {
    fileOptions.flatJson = checked;
  }
}
