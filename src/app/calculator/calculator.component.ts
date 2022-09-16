import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('valueArea') valueArea!: ElementRef;
  showAlert: boolean = false;
  showAlertText:string = '';

  /**
   * The function takes a parameter called val, which is of type any. The function then sets the value
   * of the textarea to the current value of the textarea plus the value of the parameter
   * @param {any} val - any - This is the value that will be appended to the textarea.
   */
  appendText(val: any) {
    this.valueArea.nativeElement.value = this.valueArea.nativeElement.value + val;
  }


  /**
   * It takes the value of the textarea, and removes the last character from it
   */
  delChar() {
    this.valueArea.nativeElement.value = this.valueArea.nativeElement.value.substring(0, this.valueArea.nativeElement.value.length - 1);
  }

  
  /**
   * We're using the nativeElement property of the valueArea variable to access the value property of
   * the textarea element. 
   * 
   * We're setting the value property to an empty string. 
   * 
   * This is the same as if we were to type the following in the console: 
   * 
   * document.getElementById('valueArea').value = '';
   */
  clearValueArea() {
    this.valueArea.nativeElement.value = '';
  }
  appendResult() {
    var res = /\d/.test(this.valueArea.nativeElement.value);
    var resText = this.valueArea.nativeElement.value;
    try{
      eval(resText);
    }catch(e){
      if(e instanceof SyntaxError){
        this.showAlert = true;
        this.showAlertText = 'Wrong Expression,Clearing the textarea'
        setTimeout(() => {
          this.showAlert = false;
          this.valueArea.nativeElement.value = '';
        }, 3000);
      }
    }
    if(resText == ''){
      this.showAlert = true;
      this.showAlertText = 'Nothing is there to do calculation,Please enter something,Clearing the textarea';
      setTimeout(() => {
        this.showAlert = false;
        this.valueArea.nativeElement.value = '';
      }, 3000);
    }
    else if(res){
    this.valueArea.nativeElement.value = eval(resText) != undefined ? eval(resText) : '';
    }
    else{
      this.showAlert = true;
      this.showAlertText = 'Please include digits in expression,Clearing the textarea'
      setTimeout(() => {
        this.showAlert = false;
        this.valueArea.nativeElement.value = '';
      }, 3000);
    }
  }

}
