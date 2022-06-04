import React, { Component } from 'react';
import styled from "styled-components";
import { isVisible } from "@testing-library/user-event/dist/utils";
export default class  extends Component {
    constructor(props){
        super(props);
        this.state={
            isVisible:false,
        }
    }
 
    onClickEvent=()=>{
        this.setState({
            isVisible:!this.state.isVisible,
        });
    }
   
    handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log("Search form submitted");
      }
  render() {  
      const {isVisible}=this.state;
      console.log(isVisible);
    return (


    <div className='container' >
        <form className='autocomplete-container'>
            <div className='autocomplete' role='combobox' aria-expanded='true' aria-owns='autocomplete-results' aria-haspopup='listbox'>
                <input  onClick={this.onClickEvent} className='autocomplete-input' onChange={this.props.searchUserCompanyProp} placeholder='Arama Yap..' aria-label='Search for a fruit or vegetable' aria-autocomplete='both' aria-controls='autocomplete-results'/>
                <button type='submit' className='autocomplete-submit' aria-label='Search'>
                    <svg aria-hidden='true' viewBox='0 0 24 24'>
                        <path d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' />
                    </svg>
                </button>
            </div>
            <ul id='autocomplete-results' className="autocomplete-results" role='listbox' aria-label='Arama Yap...'>
           {
               isVisible ?
               <div>
            {this.props.usersandcompanies.map((usercompany,key) => {
                return (
                    <li className='autocomplete-result selected' role="option" aria-selected="true">
                        <a>
                            <div>
                                <div class="kutu1"><i className='fas fa-search'></i> {usercompany.name}</div>
                                <div  class="kutu2"> <img src={usercompany.image}  style={{ width: 50, height: 50 }}></img></div>
                            <div class="clear"></div>
                            </div>          
                        </a>
                    </li>
                    
                );
            })}
            </div>:null
           }
       
            </ul>
        </form>
        
        <p className='search-result'></p>
        
    </div>
    
    // <Search onClick={this.onClickEvent}>
    //    <div className="search">
    //         <div className="searchInputs">
    //           <input
    //             type="text"
    //             onChange={this.props.searchUserCompanyProp} placeholder="Arama Yap..."
    //             onClick={this.onClickEvent}
    //           />
    //         </div>
       
    //         {
    //             isVisible ?
            
    //              <div className="dataResult">npm 
    //                 {this.props.usersandcompanies.map((usercompany,key) => {
    //                 return (
    //                     <a className="dataItem" href={usercompany.girisId} target="_blank">
    //                     <p>{usercompany.name} </p>
    //                     </a>
    //                 );
    //                 })}
    //             </div>:null
              
    //         }
    //       </div>   
    // </Search> 
 
    )
  }
}

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
