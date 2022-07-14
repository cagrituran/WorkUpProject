import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import styled from "styled-components";


function UserRegister2() {
    const [value, setValue] = useState('')

    return (

        <Container>








            <section style={{ marginTop: '75px' }}>


                <div className="container">



                    <div className="row g-3 justify-content-md-center">

                        <div className="card-wrapper">
                            <div class="progress mb-3 ">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div>
                            </div>
                            {/* <div className="brand">
                            <img src="/images/login-logo.svg" alt="logo"/>
                        </div> */}
                            <div className="card fat">
                                <div className="card-body">


                                    <h4 className="card-title">Kişisel Bilgiler</h4>
                                    <p className="card-title">Eksik Bilgileri Doldur</p>
                                    <form className="row my-login-validation justify-content-between" noValidate="">


                                        <div className="form-group col-6">
                                            

                                            <input id="name" placeholder="Telefon... " type="text" className="form-control" name="name" required autoFocus pattern="[0-9]{11}" title="Telefon Numarası 11 haneli olmalıdır,Boşluk içeremez!" />

                                        </div>
                                        <div className="form-group col-3">
                                            

                                            <select class="form-select" id="validationCustom04" required>
                                                <option selected disabled value="">Şehir...</option>
                                                <option>İstanbul</option>
                                            </select>

                                        </div>
                                        <div className="form-group col-3">
                                            

                                            <select class="form-select" id="validationCustom04" required>
                                                <option selected disabled value="">Ülke...</option>
                                                <option>Türkiye</option>
                                            </select>

                                        </div>
                                        
                                        <div className="form-group col-6">
                                        <textarea id="name" placeholder="Açıklama..." type="text-area" className="form-control" name="name" required autoFocus pattern="[0-9]{11}" title="Telefon Numarası 11 haneli olmalıdır,Boşluk içeremez!" />
                                            

                                            

                                        </div>
                                        <div className="form-group col-3">
                                           

                                        <input id="name" placeholder="Web Sitesi..." type="text" className="form-control" name="name" required autoFocus pattern="[0-9]{11}" title="Telefon Numarası 11 haneli olmalıdır,Boşluk içeremez!" />

                                        </div>
                                        
                                        <div className="form-group col-3">
                                            


                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    label="Doğum Tarihi"
                                                    value={value}
                                                    onChange={(newValue) => {
                                                      setValue(newValue);
                                                    }}


                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>

                                        </div>

                                        <div className="form-group m-0">
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Kaydı Tamamla.
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>

                            <div className="footer">
                                Copyright &copy; 2022 &mdash; Workup
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Container>
    )
}
const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;

& > a {
  width: 135px;
  height: 34px;
  @media (max-width: 768px) {
    padding: 0 5px;
  }
}
`;

export default UserRegister2