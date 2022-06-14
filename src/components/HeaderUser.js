import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeaderUser(props) {
   const navigate=useNavigate();
   function logout(e){
        e.preventDefault();
        localStorage.clear();
        navigate('/loginuser')
    }
  return (
    <div className='burcucard'>
           <div className='burcucard1'>
               <form>
               <button className='burcubutton'>
                   <div className='burcucard2'>
                       <div className='burcuimage'>
                           <img src={props.image} className='imgburcu'/>
                       </div>
                       <div className='burcutext'>
                           <div className='burcutext1'><p className='text'>{props.name} {props.lastname}</p></div>
                            
                            <div className='burcutext2'><p className='text1'>{props.experience}</p></div>
                       </div>
                   </div>
                   <div className='burcucard3'><div className='viewprofile'>Profili Görüntüle</div></div>
               </button>
               </form>
           </div>
           <hr/>
           <div className='burcucard1'>
                <button className='card1button'>İş İlan Sayfası Oluştur</button>
                <button className='card1button'>İş İlanı Yayınla</button>
                <button className='card1button' onClick={(e)=>logout(e)}>Oturumu Kapat</button>
           </div>
        
       </div>
  )
}


