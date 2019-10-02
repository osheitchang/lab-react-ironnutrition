import React, { Component } from "react";
import logo from "./logo.svg";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  state = {
    allfoods: foods,
    showForm: true,
    name: '',
    calories: '',
    img:''
  };

  handleNameInput = (e) => {
    this.setState({
      name: e.target.value
    })
    console.log(this.state.name)
  }

  handleCaloriesInput = (e) => {
    this.setState({
      calories: e.target.value
    })
    console.log("Hereeeeeeee>>>>>>",this.state.calories)
    console.log(this.state.calories)
  }

  
  handleImageInput = (e) => {
    this.setState({
      img: e.target.value
    })
    console.log(this.state.img)
  }

  handleFormSubmit= (e) => {
    e.preventDefault();
    console.log("Function is being called")
    // return(
    //   <div className="food-container">
    //       <img src={this.state.image} alt="can't display image" />
    //       <div className="food-details">
    //         <h2>{this.state.name}</h2>
    //         <p>{this.state.calories} cal</p>
    //       </div>
    //       <button> + </button>
    //     </div>
    // )

    // create a copy of allFoods, and add the new food item to it
    // Update the state for allFoods to be the new copy 

    let copyFoods = [...this.state.allfoods]

    copyFoods.push({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.img,
      quantity: 0
    })


    console.log(copyFoods)
    
    this.setState({
      allfoods: copyFoods,
      name: '',
      calories: '',
      img:''
    })

    console.log(this.state.allfoods)
    
  }


  showFood = () => {
    return this.state.allfoods.map(eachFood => {
      return (
        <div className="food-container">
          <img src={eachFood.image} alt="can't display image" />
          <div className="food-details">
            <h2>{eachFood.name}</h2>
            <p>{eachFood.calories} cal</p>
          </div>
          <button> + </button>
        </div>
      );
    });
  };

  addNewFood = (e) => {

    let toggle = !this.state.showForm;
    console.log(toggle)
    console.log(e)
    this.setState({
      showForm: toggle
    })

  }

  showTotal = () => {
    return (
      <div className="cart">
        <h1>Today's foods</h1>
        {/* <h3>Total: {SOMETHING} cal </h3> */}
      </div>
    );
  };
  render() {
    console.log("all foods>>>> ", this.state.allfoods);
    return (
      <div className="App">
      <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
</div>

      <div><button onClick ={this.addNewFood}>Add new food</button></div>
      {this.state.showForm &&
        <div className="newForm">
          <form onSubmit={this.handleFormSubmit}> 
              <label>Name</label>
              <input type="text" name="Name" value={this.state.name} onChange ={(e)=> this.handleNameInput(e)} />
    
              <label>Calories</label>
              <input type="text" name="Calories" value={this.state.calories} onChange ={(e)=> this.handleCaloriesInput(e)} />
    
              <label>Image</label>
              <input type="text" name="Image" value={this.state.img} onChange ={(e)=> this.handleImageInput(e)} />
    
              {/* <label>Oscar Awarded:</label>
              <input type="checkbox" name="hasOscars" checked={this.state.img} /> */}
              
              <input type="submit" value="Submit" />
          </form>
        </div>
      }
        <div className="info-container">
          <div className="food-box">{this.showFood()}</div>
          <div>{this.showTotal()}</div>
        </div>
        {/* {this.addNewFood} */}
      </div>
      /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
    );
  }
}

export default App;
