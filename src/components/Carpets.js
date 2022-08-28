import React, { Component } from 'react'
import Carpet from "./Carpet";
import CarpetConsumer from "../context";

class Carpets extends Component {
  render() {
        
    return (
        <CarpetConsumer>
            {
               value => {
                 const {carpets} = value;
                    return (
                        <div>
                        {
                        carpets.map(carpet => {
                        return (
                            <Carpet
                                key = {carpet.id}
                                id = {carpet.id} 
                                marka = {carpet.marka}
                                fiyat = {carpet.fiyat}
                                desen = {carpet.desen}                               
                            />
                        )

                    })
            }
     </div>
        )
               } 
            }
        </CarpetConsumer>
    )
    }
}
export default Carpets;

