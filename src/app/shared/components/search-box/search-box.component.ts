import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent {
  @Input() public placeholder: string = '';
  @ViewChild('txtInput') txtInput!: ElementRef<HTMLInputElement>;
  @Output() public onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
