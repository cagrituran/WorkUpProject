import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

export default function HeaderUser(props) {

   const navigate=useNavigate();

    
    

   function logout(e){
        e.preventDefault();
        localStorage.clear();
        navigate('/loginuser')
    }
    function goProfile(e){
     e.preventDefault(); 
     navigate('/profile')
      
        
        
        
    }
  return (
    <div className='burcucard'>
           <div className='burcucard1'>
               <form>
               
                   <div className='burcucard2'>
                       <div className='burcuimage'>
                           <img src={props.image} className='imgburcu'/>
                       </div>
                       <div className='burcutext'>
                           <div className='burcutext1'><p className='text'>{props.name} {props.lastname}</p></div>
                            
                            <div className='burcutext2'><p className='text1'>{props.experience}</p></div>
                       </div>
                   </div>
                   
               
               <div className='burcucard3'><Button1 onClick={(e)=>goProfile(e)}>Profili Görüntüle</Button1></div>
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
const Button1 = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #1890ff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: .3s background;
  &:hover {
    background: #40a9ff;
  }
`;
