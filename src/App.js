import React, { Component } from 'react';
import { Cards } from "./Components/index";
import * as actions from "./store/actions/index"
import { connect } from "react-redux"
import styles from "./App.module.css"
import Chart from "./Components/Charts/Charts"
import Countries from "./Components/Countries/Countries"
import CovidImage from "./images/covid.png"

class App extends Component {
  state = {
    country: ''
  }
  componentDidMount() {
    this.props.onDataFetched()
  }
  handleCountryChange = (country) => {
    this.props.onDataFetched(country)
    this.setState({ country: country })

  }
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={CovidImage} alt="Covid-19"/>
        <Cards data={this.props.datas} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Chart data={this.props.datas} country={this.state.country} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    datas: state.fetchedData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDataFetched: (country) => dispatch(actions.fetchData(country))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
