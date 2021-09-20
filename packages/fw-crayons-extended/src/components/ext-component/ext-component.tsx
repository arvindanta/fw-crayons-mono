import { Component, h } from '@stencil/core';


@Component({
  tag: 'ext-component',
  styleUrl: 'ext-component.scss',
  shadow: true,
})
export class ExtComponent {

  render() {
    return (
     <div class="extended">
       Extended component from core package upgraded:
       <br/>

       <fw-button
       color="primary">Primary Extended from Core</fw-button>
       </div>
    );
  }

}
