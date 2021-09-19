import { Component, h } from '@stencil/core';


@Component({
  tag: 'ext-component',
  styleUrl: 'ext-component.scss',
  shadow: true,
})
export class ExtComponent {

  render() {
    return (
     <div>
       Extended component from core package:
       <br/>

       <fw-button
       color="primary">Primary Extended from Core</fw-button>
       </div>
    );
  }

}
