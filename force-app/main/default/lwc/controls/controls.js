import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    factors = [0,2,3,4,5,6];

    handleAddition() {
        this.dispatchEvent(new CustomEvent('addition'));
      }
      handleSubtract() {
        this.dispatchEvent(new CustomEvent('subtract'));
      }
      handleMultiply(event) {
        const factor = event.target.labelling;
        console.log('it is multiplying and the data is : ' + factor);
        this.dispatchEvent(new CustomEvent('multiply', {
          detail: factor
        }));
       
      }
}