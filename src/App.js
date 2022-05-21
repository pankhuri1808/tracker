import React from 'react';

import {Cards,Chart,CountryPicker} from './components';
 import styles from './App.module.css';
 import {fetchdata} from './api';

 import coronaImage from './img/image.png'
class App extends React.Component{
    state={
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fetcheddata=await fetchdata();
        this.setState({data:fetcheddata});
    }
    handleCountryChange = async(country)=>{ 
        const fetcheddata=await fetchdata(country);
        
        this.setState({data:fetcheddata,country:country});
    }
    render(){
        const {data,country}=this.state;
        return(
            <div className={styles.container}>
                <img className ={styles.image} alt="Covid-19"src={coronaImage}/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
            </div>

    )
    }
}
export default App;