import React from 'react';
import Hero from '../components/Hero'
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>Natoque elit platea consectetur congue odio aptent aliquam facilisis!
        Ligula egestas eros mus rhoncus laoreet nulla dictum nascetur.</p>
        <p>Quam in leo gravida magnis, dapibus lobortis pharetra. Porttitor,
        mus urna luctus torquent.</p><p>Tellus platea tortor convallis quisque ultrices libero. 
        Nunc viverra scelerisque phasellus condimentum aliquam. Porta vel, 
        quisque neque diam luctus primis tincidunt sollicitudin dignissim erat? 
        Vulputate pulvinar cum interdum netus scelerisque.</p> <p>Interdum cubilia, 
        cras nostra facilisis donec congue lobortis neque mi! 
        Cursus id nisl dis venenatis nascetur euismod ultrices.</p>
       </Content>
    </div>
  )
}


export default AboutPage;