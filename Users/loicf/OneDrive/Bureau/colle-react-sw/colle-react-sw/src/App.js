import React from "react";
import './App.css';
import './file.json'



   fetch('./file.json').then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      console.log(data);
    }).catch(err => {
      console.log("Error Reading data " + err);
    });

    

class App extends React.Component {

    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    render() {
        const { DataisLoaded, results } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Sa ne fonctionne pas </h1> </div> ;

        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                results.map((result) => ( 
                <ol key = { result.id } >
                    name: { result.name }, 
                    height: { result.height }, 
                    mass: { result.mass },
                    hair_color: { result.hair_color }, 
                    skin_color: { result.skin_color }, 
                    birth_year: { result.birth_year },
                    gender: { result.gender },
                    homeworld: { 'https://swapi.dev/api/planets/1/' }
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default App;