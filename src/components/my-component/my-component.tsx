import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'nextflow-timer',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  
  @Prop() second: number = 10;

  @State() counter: number;

  clock;

  componentWillLoad(){
    this.counter = this.second;

    this.clock = setInterval(()=>{
      if(this.counter == 0) { 
        clearInterval(this.clock);
        return;
      }

      this.counter -= 1;

    }, 1000);
    
  }

  render(){
    return ([
      <div>{this.counter}</div>
    ]);
  }

}
