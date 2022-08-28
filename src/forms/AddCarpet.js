import React, { Component } from 'react'
import posed from 'react-pose';
import CarpetConsumer from "../context";
import axios from "axios";

const Animation = posed.div({
    visible : {
        opacity: 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden : {
        opacity : 0,
        applyAtEnd : {
            display : "none"
        }
    }
});

class AddCarpet extends Component {

  state = {
      visible : false,
      marka : "",
      desen : "",
      fiyat : "",
      error : false
  } 
  changeVisibility = (e) => {
      this.setState({
          visible : !this.state.visible
      })
  } 
  validateForm = () => {
      const {marka,fiyat,desen} = this.state;
      if (marka === "" || fiyat === "" || desen === "") {
          return false;
      }
      return true;
      
  }
  changeInput = (e) => {
      this.setState({
          
          [e.target.name] : e.target.value
      })
  }
  
  addCarpet = async (dispatch,e) => {
      e.preventDefault();
      
      const {marka,desen,fiyat } = this.state;

      const newCarpet = {
          
          marka,
          desen,
          fiyat
      }
      
      if (!this.validateForm()) {
          this.setState({
              error :true
          })
          return;
      }
      
      const response = await axios.post("http://localhost:3000/carpets",newCarpet);

      dispatch({type : "ADD_CARPET",payload:response.data});

      // Redirect
      this.props.history.push("/");
      
  } 
  render() {
    const {visible,marka,desen,fiyat,error} = this.state;
    return <CarpetConsumer>
        {
            value => {
                const {dispatch} = value;
                return (
     
                    <div className = "col-md-8 mb-4">
              
                      <button onClick = {this.changeVisibility} className = "btn btn-dark btn-block mb-2">{visible ? "Formu Kapat" : "Formu Goster"}</button>
                      <Animation pose = {visible ? "visible" : "hidden"}>
                      <div className="card">
                          <div className="card-header">
                          <h4>Yeni Halı</h4>
                          </div>
                          
                          <div className="card-body">
                             {
                                 error ? 
                                 <div className = "alert alert-danger">
                                    Lütfen bilgilerinizi kontrol edin.
                                 </div>
                                 :null
                             }

                              <form onSubmit = {this.addCarpet.bind(this,dispatch)}>
                                  <div className="form-group">
                                      <label htmlFor="marka">Marka</label>
                                      <input 
                                      type="text"
                                      name = "marka"
                                      id = "id"
                                      placeholder = "Marka İsmi"
                                      className ="form-control"
                                      value = {marka}
                                      onChange = {this.changeInput}
              
                                      />
                                  
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="desen">Desen</label>
                                      <input 
                                      type="text"
                                      name = "desen"
                                      id = "desen"
                                      placeholder = "Desen İsmi"
                                      className ="form-control"
                                      value = {desen}
                                      onChange = {this.changeInput}
                                      />
                                  
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="salary">Fiyat</label>
                                      <input 
                                      type="text"
                                      name = "fiyat"
                                      id = "fiyat"
                                      placeholder = "TL"
                                      className ="form-control"
                                      value = {fiyat}
                                      onChange = {this.changeInput}
                                      />
                                  
                                  </div>
                                  <button className = "btn btn-danger btn-block" type = "submit">Halı Ekle</button>
                              
                              
                              </form>
                          </div>
                      
                      </div>
                      </Animation>
                    </div>
                  )
            }
        }
    </CarpetConsumer>    
  }
}
export default AddCarpet;
