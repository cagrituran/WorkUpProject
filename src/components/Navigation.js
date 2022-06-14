import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Navigation(props) {
    const companyId=props.mycompanyProps.companyid;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://localhost:7079/api/UserCompany/company/${companyId}`)
          .then((response) => response.json())
          .then((data) => setData(data));
    }, []);

    localStorage.setItem('Company',JSON.stringify(data));
    const companyimg=JSON.parse(localStorage.getItem('Company')).companyImage;
    const companyname=JSON.parse(localStorage.getItem('Company')).companyName;
  return (
    <div className='navigationcontent'>
        <div className='navigationcard1'>
            <div className='navigate1'>
                <img src={companyimg} className='imagestyle'/>
                <p className='textstyle'>{companyname}</p>
                <div className='divstyle'>Süper admin görünümü</div>
            </div>
        </div>
        <div className='navigationcard2'>
            <div className='navigate2'>
                <button className='buttonstyle'><p className='textstyle2'>Üye Olarak Görüntüle</p></button>
            </div>
        </div>
    </div>
  );
}
