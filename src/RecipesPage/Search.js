import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Search extends Component {
  constructor(props) {
    super(props);
 
    this.state = { name: '', meals: [] };
  }
 
  onChange = event => {
    this.setState({ name: event.target.value });
  };
 
  onSearch = event => {
    event.preventDefault();
 
    const { name } = this.state;
 
    if (name === '') {
      return;
    }
 
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name)
      .then(response => response.json())
      .then(result => this.onSetResult(result, name));
  };
 
  onSetResult = (result, key) => {
    this.setState({ meals: result.meals });
  };
  render() {
    return (
      <div>
        {/* Search Input */}
          <form className="d-flex justify-content-center" onSubmit={this.onSearch}>
            <input className="form-control my-5 col-3" type="text" onChange={this.onChange} />
            <button className="btn TYU my-5" type="submit">Search</button>
          </form>
 
        {/* Result */}
          <div className="container-fluid d-flex justify-content-center">
              {this.state.meals.map(item => (
                <Card border="primary" style={{ width: '18rem' }} key={item.idMeal}>
                <Card.Header>{item.strMeal}</Card.Header>
                <Card.Body>
                  <Card.Title>{item.strArea}</Card.Title>
                  <Card.Img variant="top" src={item.strMealThumb} id="imgTop" />
                  <Card.Text>
                     {item.strTags}
                  </Card.Text>
                  <Button href={'/Detail/' +item.idMeal } target="_blank" className="btn TYU">Show Details</Button>
                </Card.Body>
              </Card>
              ))}
          </div>
      </div>
    );
  }
}
 
export default Search;