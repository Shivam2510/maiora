import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SliderModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  formGroup!: FormGroup;
  @Input() value: number = 70;

  @Input() data:any = {}
  @Output() valueEMit = new EventEmitter();

    

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(this.value)
        });
    }

    changeSlider(){
      this.valueEMit.emit(this.formGroup.get('value')?.value)
    }

}
