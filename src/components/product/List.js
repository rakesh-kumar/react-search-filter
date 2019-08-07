import React, { Component } from 'react';
import './Product.css';
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
      this.setState({
        filtered: this.props.items
      });
    }

  
    
    handleChange(e) {
      var search = document.getElementById("search-field")
      var fruit = document.getElementById("filter-fruit")
      var vegetable = document.getElementById("filter-vegetable")
      let currentList = this.props.items;
      let newList = [];

      if (search.value !== "" && fruit.checked && vegetable.checked) {
        newList = currentList.filter(item => {
          const lc = item.name.toLowerCase();
          const filter = search.value.toLowerCase();
          return lc.includes(filter);
        });
      } else if (search.value !== "" && fruit.checked) {
        newList = currentList.filter(item => {
          const lc = item.name.toLowerCase();
          const lc1 = item.category.toLowerCase();
          const filter = search.value.toLowerCase();
          const filter1 = fruit.value.toLowerCase();
          return (lc.includes(filter) && lc1.includes(filter1));
        });
      } else if (search.value !== "" && vegetable.checked) {
        newList = currentList.filter(item => {
          const lc = item.name.toLowerCase();
          const lc1 = item.category.toLowerCase();
          const filter = search.value.toLowerCase();
          const filter1 = vegetable.value.toLowerCase();
          return (lc.includes(filter) && lc1.includes(filter1));
        });
      } else if (fruit.checked && vegetable.checked) {
        newList = this.props.items;
      } else if (search.value !== "") {
        newList = currentList.filter(item => {
          const lc = item.name.toLowerCase();
          const filter = search.value.toLowerCase();
          return lc.includes(filter);
        });
      } else if (fruit.checked) {
        newList = currentList.filter(item => {
          const lc = item.category.toLowerCase();
          const filter = fruit.value.toLowerCase();
          return lc.includes(filter);
        });
      } else if (vegetable.checked) {
        newList = currentList.filter(item => {
          const lc = item.category.toLowerCase();
          const filter = vegetable.value.toLowerCase();
          return lc.includes(filter);
        });
      } else {
        newList = this.props.items;
      }
      this.setState({
        filtered: newList
      });
    }

    
    render() {
        return (
            <div className="container">
              <input type="text" className="input" id="search-field" onChange={this.handleChange} placeholder="Search..." />
              <input type="checkbox" name="category1" id="filter-fruit" onClick={this.handleChange} value="fruit"/> fruit
              <input type="checkbox" name="category2" id="filter-vegetable" onClick={this.handleChange} value="vegetable"/> vegetable
              <div className="row" >
                {this.state.filtered.map(product => (
                  <div className="col-md-4" style={{marginBottom:"10px"}}>
                    <div className="card">
                      <img src={product.image} style={{width:"297px", height: "200px"}} ></img>
                      <div className="row">
                        <div className="col-md-8">
                          <h2>{product.name}</h2>
                        </div>
                        <div className="col-md-4">
                          <p className="price">${product.price}</p>
                        </div>
                      </div>
                      <p className="">{product.category}</p>
                      <p>Some text about the product</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        )
    }
}