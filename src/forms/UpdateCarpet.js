import React, { Component } from 'react'
import axios from "axios";
import CarpetConsumer from "../context";

class UpdateCarpet extends Component {

  state = {
      marka : "",
      desen :"",
      fiyat : "",
      error : false
  } 
   
  changeInput = (e) => {
      this.setState({
          
          [e.target.name] : e.target.value
      })
  }
  componentDidMount = async () => {
    const {id} = this.props.match.params;
    
    const response = await axios.get(`http://localhost:3000/carpets/${id}`);

    const {marka,fiyat,desen} = response.data;

    this.setState({
        marka,
        fiyat,
        desen
    });

  }
  validateForm = () => {
    const {name,salary,department} = this.state;
    if (name === "" || salary === "" || department === "") {
        return false;
    }
    return true;
    
}
  UpdateCarpet = async (dispatch,e) => {
      e.preventDefault();

      // Update Carpet
      const {marka,fiyat,desen} = this.state;
      const {id} = this.props.match.params;
      const updatedCarpet = {
        marka,
        fiyat,
        desen
      };
      if (!this.validateForm()) {
        this.setState({
            error :true
        })
        return;
        }
      const response = await axios.put(`http://localhost:3000/carpets/${id}`,updatedCarpet);

      dispatch({type: "UPDATE_CARPET",payload : response.data});

      // Redirect
      this.props.history.push("/");
  } 
  render() {
    const {marka,fiyat,desen,error} = this.state;
    return <CarpetConsumer>
        {
            value => {
                const {dispatch} = value;
                return (
     
                    <div className = "col-md-8 mb-4">
                      <div className="card">
                          <div className="card-header">
                          <h4>Halı Bilgisi Güncelle</h4>
                          </div>
                          <div className="card-body">
                          {
                            error ? 
                            <div className = "alert alert-danger">
                               Hatalı giriş yapıldı.
                            </div>
                            :null
                         }
                              <form onSubmit = {this.UpdateCarpet.bind(this,dispatch)}>
                                  <div className="form-group">
                                      <label htmlFor="marka">Marka</label>
                                      <input 
                                      type="text"
                                      name = "marka"
                                      id = "id"
                                      placeholder = "Enter Name"
                                      className ="form-control"
                                      value = {marka}
                                      onChange = {this.changeInput}
                                      />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="department">Desen</label>
                                      <input 
                                      type="text"
                                      name = "desen"
                                      id = "desen"
                                      placeholder = "Enter Department"
                                      className ="form-control"
                                      value = {desen}
                                      onChange = {this.changeInput}
                                      />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="fiyat">Fiyat</label>
                                      <input 
                                      type="text"
                                      name = "fiyat"
                                      id = "fiyat"
                                      placeholder = "Enter Salary"
                                      className ="form-control"
                                      value = {fiyat}
                                      onChange = {this.changeInput}
                                      />
                                  </div>
                                  <button className = "btn btn-danger btn-block" type = "submit">Guncelle</button>
                              </form>
                          </div>
                      </div>
                    </div>
                  )
            }
        }
    </CarpetConsumer>  
  }
}
export default UpdateCarpet;
