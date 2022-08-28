import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CarpetConsumer from "../context";
import axios from "axios";
import {Link} from "react-router-dom";

class Carpet extends Component {
  state = {
    isVisible : false
  }
  static defaultProps = {
    marka : "Marka yok",
    fiyat : "Fiyat yok",
    desen : "Desen yok"
  }
  
  onClickEvent = (e) =>{
    
    this.setState({
      isVisible : !this.state.isVisible
    })
  }
  onDeleteCarpet = async (dispatch,e) => {
     const {id} = this.props;
     // Delete Request
    await axios.delete(`http://localhost:3000/carpets/${id}`);

    // Consumer Dispatch
    dispatch({type : "DELETE_CARPET",payload:id});
  }
  render() {

    // Destructing
    const {id,marka,desen,fiyat} = this.props;
    const {isVisible} = this.state;
    return (
      <CarpetConsumer>
      {
        value => {
          const {dispatch} = value;

          return (
            <div className = "col-md-8 mb-4" >
              <div className="card" style = {isVisible ? {backgroundColor : "#62848d",color : "white"} : null}>
                <div className="card-header d-flex justify-content-between">
                  <h4 className = "d-inline" onClick = {this.onClickEvent}>{marka}</h4>
                  
                  <i onClick = {this.onDeleteCarpet.bind(this,dispatch)} className = "far fa-trash-alt" style = {{cursor : "pointer"}}></i>
      
                </div>
                {
                  isVisible ? <div className="card-body">
                
                  <p className="card-text">Fiyat : {fiyat}</p>
                  <p className="card-text">Desen : {desen}</p>
                  <Link to = {`edit/${id}`} className = "btn btn-dark btn-block"> Duzenle </Link>
                  </div> : null
                } 
              </div>
            </div>
          )
        }
      }
    </CarpetConsumer>)
         }
       }
Carpet.propTypes = {
  marka : PropTypes.string.isRequired,
  fiyat : PropTypes.string.isRequired,
  desen : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired
}
export default Carpet;
