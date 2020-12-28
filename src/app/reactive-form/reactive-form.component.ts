import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

/**
 * NOTE: Dependency injection at a high level is a way to tell Angular what depencedies this component needs to function properly.
 * 1. During injeciton an instance of FormBuilder will be created and we assign it to the "fb" variable (in the constructor).
 *    - 2 main functions of FormBuilder: 
 *      - 1. Control - creates new FormControl 
 *      - 2. Group - Creates new FormGroup
 * 2. Created an instance variable "myForm" and sku.
 *  - sku is declared at the top of the class to be available anywhere in the component view. 
 *      - sku is a FormControl as an instance variable.
 *        - Declaring an instance variable for each form input is one way of accessing the form control.
 *  - myForm is typed to be a FormGroup. We create a FormGroup by calling fb.group(). group takes an object of key-value pairs that specify the FormControls in this group.
 *    - In this case we are setting up one control 'sku' and the input is required. 
 * 3. Created a validator function that specifies requirements for the sku. 
 * 4. Used Validators.compose to assign more than one validator to one input. The FormControl is not valud unless both validations are valid. 
 * 5. Watching for changes to the form and the input by getting access to the Event emitter by calling control.valuechanges. Then we add an observer using the .subscribe method. This event emitter comnes with both FormGroup and FormControl.
 */


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':['', Validators.compose([Validators.required, skuValidator])],
    });
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    )

      this.myForm.valueChanges.subscribe(
        (form: any) => {
          console.log('Form changed to:', form);
        }
      )

    function skuValidator(control: FormControl): { [s: string]: boolean } {
      if (!control.value.match(/^123/)) {
        return { invalidSku: true };
      }
    }
   }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('You submitted value:', value);
  }

}
