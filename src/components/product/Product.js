import React, { Component } from 'react';

import List  from './List';
export default class Product extends Component {

  products = [{
        "id": 1,
        "name": "banana",
        "price": "0.35",
        "category": "fruit",
        "image": "/banana.jpg"
    },
    {
        "id": 2,
        "name": "apple",
        "price": "0.55",
        "category": "fruit",
        "image": "/apple.jpeg"
    },
    {
        "id": 3,
        "name": "orange",
        "price": "0.65",
        "category": "fruit",
        "image": "/orange.jpg"
    },
    {
        "id": 4,
        "name": "strawberries",
        "price": "4.99",
        "category": "fruit",
        "image": "/strawberries.jpeg"
    },
    {
        "id": 5,
        "name": "tomato",
        "price": "0.85",
        "category": "vegetable",
        "image": "/tomato.png"
    },
    {
        "id": 6,
        "name": "cucumber",
        "price": "1.05",
        "category": "vegetable",
        "image": "/cucumber.jpg"
    },
    {
        "id": 7,
        "name": "lettuce",
        "price": "2.65",
        "category": "vegetable",
        "image": "/lettuce.jpg"
    },
    {
        "id": 8,
        "name": "carrot",
        "price": "0.33",
        "category": "vegetable",
        "image": "/carrot.jpg"
    },
    {
        "id": 9,
        "name": "potato",
        "price": "0.83",
        "category": "vegetable",
        "image": "/potato.jpg"
    }
]
  constructor(props) {
    super(props)

    this.state = {
      list: this.products
    }
  }

  
render() {
  return (
    <List items={this.state.list} />
    )
  }
}





