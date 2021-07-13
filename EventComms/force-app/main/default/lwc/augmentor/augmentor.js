import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
  startCounter = 0;
  starters = [100,1000,10000,100000,1000000];

  handleStartChange(event) {
    this.startCounter = parseInt(event.target.value);
  }

  handleMaximizeCounter(event) {
    const starter = parseInt(event.target.dataset.starter);
    
    this.template.querySelector('c-numerator').maximizeCounter(starter);
  }
}