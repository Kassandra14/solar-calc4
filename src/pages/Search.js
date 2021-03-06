import React, {Component, useContext, createContext, useState} from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Alert from '../components/Alert';
import ReactDOM from 'react-dom';
import {Route, Redirect, useHistory} from 'react-router-dom';
//import {Redirect} from 'react-router';
import BackButton from '../components/BackButton';
import Good from "./Good";
import Bad from "./Bad";

var lat = [];
var long = [];
var Kwh = '';
class Search extends Component {
  state = {
    search: '',
    city: '',
    cost: '',

    solar: '',
    // breeds: [],

    results: null,
    error: '',
  };

  handleInputChange = event => {
    this.setState ({city: event.target.value});
  };
  handleSearchChange = e => {
    this.setState ({search: e.target.value});
  };
  handleCostChange = e => {
    this.setState ({cost: e.target.value});
  };   
  
 handleFormSubmit = (event) => {
  event.preventDefault();
  // var monthlyKwh = (this.state.search)
  API.getLatLong(this.state.city)
    // console.log(monthlyKwh);
    .then((res) => {
      lat.push(res.data[0].lat);
      long.push(res.data[0].lon);
      // console.log(JSON.parse(long));
      // console.log(JSON.parse(lat));
      if (res.data.status === "error") {
        throw new Error(res.data);
      }
      API.getIrradiance(lat, long)
        .then((res) => {
          const annualDNI = res.data.outputs.avg_dni.annual;
          // const monthlyKwh = 333;
          Kwh = this.state.search;
          console.log(Kwh);
          console.log(res.data.outputs.avg_dni.annual);
          var solar = +Kwh / 30 / (annualDNI * 0.71);
          this.setState({ solar: solar });
          console.log(this.state.solar);
          if (res.data.status === "error") {
            throw new Error(res.data);
          }
          console.log(solar);
          this.setState({ results: annualDNI, error: "" });
        })
        .catch((err) => this.setState({ error: err.message }));
    });
  // if (this.solar <= 6) {
  //   window.location.href = "/good";
  // } else {
  //   window.location.href = "/bad";
  // }
};

  render () {
    return (
     
    <div>
        <Container style={{minHeight: '80%'}}>
          <h1 className="text-center">Enter your information:</h1>
          <Alert
            type="danger"
            style={{opacity: this.state.error ? 1 : 0, marginBottom: 10}}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleSearchChange={this.handleSearchChange}
            handleCostChange={this.handleCostChange}
            city={this.state.city}
            cost={this.state.cost}
            search={this.state.search}
          />
          <SearchResults results={this.state.results} />

          <BackButton to="/about">Back to SolarCalc</BackButton>
        </Container>
      </div>
  
    );
  }
}

export default Search;
