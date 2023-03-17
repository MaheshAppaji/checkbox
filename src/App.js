import { Component } from "react";
import "./App.css";
import ListItem from "./ListItem";

const playList = [
  { id: 1, name: "Cricket" },
  { id: 2, name: "Rugby" },
  { id: 3, name: "Kabaddi" },
];

class App extends Component {
  state = {
    sportsList: playList,
    
  };

  onDelete = id=>{
    const {sportsList} = this.state
    const filteredList = sportsList.filter((eachSport) => eachSport.id !== id);
    this.setState({sportsList:filteredList})
  }


  render() {
    const { sportsList } = this.state;
    return (
      <div>
        <ul>
          {sportsList.map((eachSport) => (
            <ListItem
              key={eachSport.id}
              listDetails={eachSport}
              
              onDelete={this.onDelete}
              
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
