import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'demo1';
  http = inject(HttpClient);

  ngOnInit() {
  }

  getData() {
    return this.http.get<any>('http://localhost:4200/assets/a.json')
      .pipe(
        map((data) => data.data)
      );
  }
}
