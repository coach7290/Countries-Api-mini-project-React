import React from "react";
import axios from "axios";
import Country from"./Country";
import Modal from "./Modal";
import search from "./search-solid.svg"
import "./App.css";

class App extends React.Component{
  constructor (props){
    super (props);
    this.state={
      countries : [],
      clickedCountry: {},
      modalOn : false,
      search : "",
      lightMode: false,
      filteredRegion : ""
      
      

    }
  }

  

  componentDidMount(){
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(res => {
      const data = res.data;
      

      this.setState({
        countries : data

      })
      
      
      let countries = this.state.countries
      console.log(countries);
      
       })

   

  }


  showInfo = (name) => {
    this.setState({
      clickedCountry : this.state.countries.find(it => it.name===name),
      modalOn : true
      
    });  
    
    console.log(this.state.clickedCountry);
    
  }

  

  closeModal =()=>{
    this.setState({
      modalOn : false
    })
  }

  onChange = e =>{
    this.setState({
      search: e.target.value
    })
  }

switchMode=()=>{
  this.setState({lightMode: !this.state.lightMode})
  console.log(this.state.lightMode);
  
}

filterRegion=(e)=>{
  console.log(e.target.name);

  this.setState({filteredRegion: e.target.name})
  console.log(this.state.filteredRegion);
  
  
  
}

  render() {

    const {search} = this.state;
    const {filteredRegion} = this.state;

    let filteredCountries = this.state.countries.filter(country => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    switch (this.state.filteredRegion) {
      case "Africa" :
        filteredCountries = this.state.countries.filter(country => {
          return country.region.toLowerCase().indexOf(this.state.filteredRegion.toLowerCase()) !== -1;
        });

        break;
        case "America" :
        filteredCountries = this.state.countries.filter(country => {
          return country.region.toLowerCase().indexOf(this.state.filteredRegion.toLowerCase()) !== -1;
        });

        break;
        case "Asia" :
        filteredCountries = this.state.countries.filter(country => {
          return country.region.toLowerCase().indexOf(this.state.filteredRegion.toLowerCase()) !== -1;
        });

        break;

        case "Europe" :
        filteredCountries = this.state.countries.filter(country => {
          return country.region.toLowerCase().indexOf(this.state.filteredRegion.toLowerCase()) !== -1;
        });

        break;


        
    }

   
    
    return (
      <div style={{backgroundColor: this.state.lightMode? "hsl(0, 0%, 98%)": "hsl(207, 26%, 17%)"}} className="App">
      <header style={{backgroundColor: this.state.lightMode? "hsl(0, 0%, 100%)": "hsl(209, 23%, 22%)"}}>
        <div className="menu">
        <h2>Where in the world?</h2>
    <button onClick={this.switchMode}>{this.state.lightMode? "Dark Mode": "Light Mode"}</button>
        </div>
        </header>
        <div className="filter">
           
           <input style={{backgroundColor: this.state.lightMode? "hsl(0, 0%, 100%)": "hsl(209, 23%, 22%)"}} label="search-country" placeholder="Search for a Country" icon="search" onChange={this.onChange}/>
           <div className="dropdown">
           <button style={{backgroundColor: this.state.lightMode? "hsl(0, 0%, 100%)": "hsl(209, 23%, 22%)"}} className="dropbtn">Filter by region</button>
           <div onClick={this.filterRegion} className="dropdown-content">
           <a name="Africa" href="#">Africa</a>
           <a name="America" href="#">America</a>
           <a name="Asia" href="#">Asia</a>
           <a name="Europe" href="#">Europe</a>
           <a name="Oceania" href="#">Oceania</a>
           
  </div>
</div>
        </div>
     
    
      <div style={{backgroundColor: this.state.lightMode? "hsl(0, 0%, 98%)": "hsl(207, 26%, 17%)"}}  className="container">
     
      {filteredCountries.map(country=>
 <Country name={country.name}
                 key={country.name} 
                 population ={country.population} 
                 region={country.region}
                 capital={country.capital}
                 flag={country.flag}
                 showInfo={this.showInfo}
                 languages={country.languages}
                 lightMode ={this.state.lightMode}
                 />
      
      )}
      <div style={{display: this.state.modalOn? "block" : "none"}}>
        <Modal closeModal={this.closeModal} 
               name={this.state.clickedCountry.name} 
               population={this.state.clickedCountry.population}
               region={this.state.clickedCountry.region}
               capital ={this.state.clickedCountry.capital}
               flag={this.state.clickedCountry.flag}
               nativeName ={this.state.clickedCountry.nativeName}
               subregion={this.state.clickedCountry.subregion}
               topLevelDomain={this.state.clickedCountry.topLevelDomain}
               languages={this.state.clickedCountry.languages}
               currencies ={this.state.clickedCountry.currencies}
               borders={this.state.clickedCountry.borders}
              />
      </div>
      
      </div>
      </div>
    )
  }
}

export default App;