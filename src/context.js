import React, { Component } from 'react'
import axios from "axios";
const CarpetContext = React.createContext();
// Provider , Consumer
const reducer = (state,action) => {
  switch(action.type) {
    case "DELETE_CARPET":
       
       return {
        ...state,
        carpets: state.carpets.filter(carpet => action.payload !== carpet.id)
       }
    case "ADD_CARPET":
       return {
         ...state,
         carpets : [...state.carpets,action.payload]
       }
    case "UPDATE_CARPET":
       return {
         ...state,
         carpets: state.carpets.map(carpet => carpet.id === action.payload.id ? action.payload : carpet)
       }
    default:
      return state

  }
}

export class CarpetProvider extends Component {
    state = {
        carpets: [],
        dispatch : action => {
          this.setState(state => reducer(state,action))
        }
      }
  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3000/carpets")
    this.setState({
      carpets: response.data
    })
  }
      
  render() {
    return (
      <CarpetContext.Provider value = {this.state}>
        {this.props.children}
      </CarpetContext.Provider>
    )
  }
}
const CarpetConsumer = CarpetContext.Consumer;

export default CarpetConsumer;
