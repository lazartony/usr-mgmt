import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <p>
        <app-menu>
          <li class="nav-item">
              <a class="nav-link" href="#">Back to Top</a>
          </li>
        </app-menu>
        &copy; Copyright 2000 - 2021
      </p>
    </div>
  `,
  styles: [
    ``
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
