import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dataSVC: DataService, private http: HttpClient) {
    this.getData();
  }

  Data: any;
  filteredData: any;
  nextPage = 0;

  getData() {
    this.dataSVC.getData().subscribe((data) => {
      this.Data = data.results;
      this.filteredData = this.Data;
    });
  }

  onScroll() {
    this.nextPage = this.nextPage + 1;

    this.http
      .get(`https://rickandmortyapi.com/api/character?page=${this.nextPage}`)
      .subscribe((data: any) => {
        this.Data = this.Data.concat(data.results);
        this.filteredData = this.Data;
      });
  }

  searchResults(event: any) {
    this.filteredData = event;
  }
}
