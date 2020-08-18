import React from 'react';

// import Cards from './components/Cards'
// import Chart from './components/Chart'
// import CountryPicker from './components/CountryPicker'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      country: ''
    }
  }

  handleCountryChange = async (country) => {
    //fetch data
    const fetchedData = await fetchData(country)

    console.log(fetchedData)
    //set state
    this.setState({data: fetchedData, country: country})
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({data: fetchedData})
  }
  
  render () {
    const {data, country} = this.state

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    )
  }
}
export default App