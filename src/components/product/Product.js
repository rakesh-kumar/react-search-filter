import React, { Component } from 'react';
import './Product.css';
export default class Product extends Component {

  products = [{
        "id": 1,
        "name": "banana",
        "price": "0.35",
        "category": "fruit"
    },
    {
        "id": 2,
        "name": "apple",
        "price": "0.55",
        "category": "fruit"
    },
    {
        "id": 3,
        "name": "orange",
        "price": "0.65",
        "category": "fruit"
    },
    {
        "id": 4,
        "name": "strawberries",
        "price": "4.99",
        "category": "fruit"
    },
    {
        "id": 5,
        "name": "tomato",
        "price": "0.85",
        "category": "vegetable"
    },
    {
        "id": 6,
        "name": "cucumber",
        "price": "1.05",
        "category": "vegetable"
    },
    {
        "id": 7,
        "name": "lettuce",
        "price": "2.65",
        "category": "vegetable"
    },
    {
        "id": 8,
        "name": "carrot",
        "price": "0.33",
        "category": "vegetable"
    },
    {
        "id": 9,
        "name": "potato",
        "price": "0.83",
        "category": "vegetable"
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





class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }
    
    componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }
    
    handleChange(e) {
        var search = document.getElementById("search-field")
        var fruit = document.getElementById("filter-fruit")
        var vegetable = document.getElementById("filter-vegetable")

        debugger
    let currentList = [];
    let newList = [];
        
    if (e.target.value !== "") {
      currentList = this.props.items;
          
      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        debugger
        return lc.includes(filter);
      });
    } else {
      newList = this.props.items;
    }
    this.setState({
      filtered: newList
    });
  }

  handleFilter(e){

    console.log(e.target, e.target.value,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    if (e.target.checked) {
        let currentList = [];
        let newList = [];
            
        if (e.target.value !== "") {
          currentList = this.props.items;
              
          newList = currentList.filter(item => {
            const lc = item.category.toLowerCase();
            const filter = e.target.value.toLowerCase();
            return lc.includes(filter);
          });
        } else {
          newList = this.props.items;
        }
        this.setState({
          filtered: newList
        });
    } else {
       this.setState({
          filtered: this.props.items
        }); 
    }
  }
    
    render() {
        return (
            <div className="container">
                <input type="text" className="input" id="search-field" onChange={this.handleChange} placeholder="Search..." />

                <input type="checkbox" name="category1" id="filter-fruit" onClick={this.handleFilter} value="fruit"/> fruit
                <input type="checkbox" name="category2" id="filter-vegetable" onClick={this.handleFilter} value="vegetable"/> vegetable

                    

                 <div className="row" >
                   {this.state.filtered.map(product => (
                     
                   <div className="col-md-4" style={{marginBottom:"10px"}}><div className="card">
          <img src="https://abcpuppy.s3-us-west-2.amazonaws.com/uploads/puppy_image/avatar/110422/DSC_6519.JPG" style={{width:"100%"}} ></img><h1>{product.name}</h1><p className="price">${product.price}</p><p className="">{product.category}</p><p>Some text about the product</p></div></div>
          
           ))}
             </div>

                </div>
        )
    }
}