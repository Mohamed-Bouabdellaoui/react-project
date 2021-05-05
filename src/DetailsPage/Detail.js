import axios from 'axios';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
export class Detail extends Component {
  state = {
    obj: [],
  };
  componentWillMount = () => {
    const login = this.props.match.params.login;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${login}`)
      .then((res) => {
        this.setState({
          obj: res.data.meals,
        });
      });
  };

  render() {
    return (
      <div className="container-fluid mx-0 my-5">
        {this.state.obj.map((gitDATA) => (
          <div className="row">
            <div className="col-sm-6">
              <img className="card-img-top" src={gitDATA.strMealThumb} alt="" />
            </div>
            <div className="col-sm-6">
              <h4 className="">
                {gitDATA.strMeal}
                <Link className="m-5" onClick={this.props.ajouter}>
                  <i className="fas fa-heart text-danger"></i>
                </Link>
              </h4>
              <h2 className="P1 COT">Ingredients</h2>
              <h6 className="">
                {gitDATA.strIngredient1} ,{gitDATA.strIngredient2},
                {gitDATA.strIngredient3} ,{gitDATA.strIngredient4},
                {gitDATA.strIngredient9} ,{gitDATA.strIngredient5},
                {gitDATA.strIngredient6},{gitDATA.strIngredient7},
                {gitDATA.strIngredient8},{gitDATA.strIngredient10},
              </h6>
              <h2 className="P1 COT">Instructions</h2>

              <h6 className=""> {gitDATA.strInstructions}</h6>
              <a href={gitDATA.strYoutube} class="btn TYU" target="_blank">Show Video</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Detail;