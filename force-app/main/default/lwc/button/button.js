import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {

    @api labelling;
    @api icons;
    
    handleButton() {
      this.dispatchEvent(new CustomEvent('buttonclick',{
      }));
      console.log('pressed');
    }

}