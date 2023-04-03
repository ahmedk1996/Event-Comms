import { api, LightningElement} from 'lwc';

export default class Numerator extends LightningElement {

    
     //counter = 0;
     @api
     _currentCount;

     @api
     priorCount = 0;

    handleIncrement() {
        console.log('it is ioncrementing');
        this.counter++;
    }

    handleDecrement() {
        console.log('it is dec');
        this.counter--;
    }
    
    handleMultiply(event) {
        const factor = event.detail;
        this.counter = this.counter * factor;
       
      }

      @api
      maximizeCounter() {
        this.counter += 1000000;
      }

      @api
      get counter(){
        return this._currentCount;
      }

      
      set counter(value){
        this.priorCount = this._currentCount
        this._currentCount = value;
      }

}