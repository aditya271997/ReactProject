import React from 'react'
import Slider from './Slider'
import Footer from './Footer'
import Coffeeseg from './Coffeeseg'
import {New,Why} from './Services'
export default class Home extends React.Component{
     render(){
         return(
             <div>
                 <Slider/>
                   <br/>
                   <br/>
                 <Coffeeseg />
                   <br/>
                <New />
                   <br/>
                   <br />
                 <Why />
                  <br/>
                   <br/>
                  <Footer/> 
                    
              

             </div>
         )
     }
 }