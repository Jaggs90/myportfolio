import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card'

import github from '../assets/images/github.png'
import robofriends from '../assets/images/robofriends.png'
import smartbrain from '../assets/images/smartBrain.png'

class Carousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'GitHub',
          subTitle: 'My GitHub Repository',
          imgSrc: github,
          link: 'https://github.com/Jaggs90',
          selected: false
        },
        {
          id: 1,
          title: 'RoboFriends',
          subTitle: 'Project from - The Complete Web Developer in 2020: Zero to Mastery',
          imgSrc: robofriends,
          link: 'https://jaggs90.github.io/robofriends/',
          selected: false
        },
        {
          id: 2,
          title: 'Smart-Brain',
          subTitle: 'Project from - The Complete Web Developer in 2020: Zero to Mastery',
          imgSrc: smartbrain,
          link: 'https://smartbrain90.herokuapp.com/',
          selected: false
        },
        
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )

  }
}

export default Carousel;