import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { Select, SelectItem } from 'primeng/select'

@Component({
  selector: 'app-select',
  imports: [Select, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() sort!: {label:string ; value:string}[];

  @Input() placeholder!: string;
  @Input() group: boolean = false;
  @Output() data = new EventEmitter<string>()

  select!: string
  changeValue() {
    this.data.emit(this.select)
  }
  ngOnInit() {

  }
}
