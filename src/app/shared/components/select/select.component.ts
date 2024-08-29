import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() myCategories:any[] = [];
  @Output() selectedCat = new EventEmitter<any>();
  selectedCategory(event:any){
    this.selectedCat.emit(event);
  }
}
