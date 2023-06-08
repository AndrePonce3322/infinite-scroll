import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Input() DataToSearch!: any[];
  @Output() ShareResult = new EventEmitter<any[]>();

  InputText!: string;
  filteredData!: any[];

  ngOnChanges() {
    this.filteredData = this.DataToSearch;
  }

  Search() {
    if (!this.InputText) {
      return this.DataToSearch;
    }

    const result: any[] = [];

    const search = this.InputText.toLowerCase();

    for (const value of this.DataToSearch) {
      const name = value.name.toLowerCase();

      if (name.indexOf(search) !== -1) {
        result.push(value);
      }
    }
    this.ShareResult.emit(result);

    return result;
  }
}
