import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { Select, } from 'primeng/select'


@Component({
  selector: 'app-select-group',
  imports: [Select,FormsModule],
  templateUrl: './select-group.component.html',
  styleUrl: './select-group.component.scss'
})
export class SelectGroupComponent {
  @Input() sortGroup!:SelectItemGroup[];
  @Input() placeholder!:string;

  selectSort!: string 
   @Output() data = new EventEmitter<string>()


   changeValue(){
    this.data.emit(this.selectSort)
   }
}
