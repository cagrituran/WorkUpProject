import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import styled from "styled-components";

// tryin step 2
function UserRegister2() {
    const [userdata, setUserdata] = useState({
        phone:'',
        city:'',
        country:'',
        explanation:'',
        website:'',
        birthdate:'',
    })
    function submit(e){
        e.preventDefault()
        console.log(userdata.phone)
        console.log(userdata.city)
        console.log(userdata.country)
        console.log(userdata.explanation)
        console.log(userdata.website)
        console.log(userdata.birthdate)

        
    }
    function handle(e) {
        const newdata = { ...userdata }
        newdata[e.target.id] = e.target.value
        setUserdata(newdata)
        console.log(newdata)


    }

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

                                    <form onSubmit={(e) => submit(e)} className="my-login-validation " noValidate="">
                                        <div className='row justify-content-around'>
                                            <div className="form-group col-6 mb-4">
                                                <input id="phone" placeholder="Telefon... " type="text" onChange={(e)=>handle(e)} value={userdata.phone} className="form-control" name="name" required autoFocus pattern="[0-9]{11}" title="Telefon Numarası 11 haneli olmalıdır,Boşluk içeremez!" />
                                            </div>
                                            <div className="form-group col-3">
                                                <select onChange={(e)=> handle(e)} class="form-select" value={userdata.city} id="city" required>
                                                    <option selected disabled value="">Şehir...</option>
                                                    <option>İstanbul</option>
                                                </select>

                                            </div>
                                            <div className="form-group col-3">
                                                <select onChange={(e)=> setUserdata(e.target.value)} class="form-select" id="validationCustom04" required>
                                                    <option selected disabled value="">Ülke...</option>
                                                    <option>Türkiye</option>
                                                </select>

                                            </div>

                                            <div className="form-group col-6">
                                                <textarea id="name" placeholder="Açıklama..." type="text-area" onChange={(e)=> setUserdata(e.target.value)}className="form-control mb-4" name="name" required autoFocus pattern="[0-9]{11}" title="Telefon Numarası 11 haneli olmalıdır,Boşluk içeremez!" />
                                            </div>

                                            <div className="form-group col-3">

                                                <input id="name" placeholder="Web Sitesi..." type="text" className="form-control" name="name" onChange={(e)=> setUserdata(e.target.value)} required autoFocus pattern="[0-9]{11}" title="Telefon Numarası 11 haneli olmalıdır,Boşluk içeremez!" />

                                            </div>

                                            <div className="form-group col-3">

                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="Doğum Tarihi"
                                                        value={userdata.birthdate}
                                                        onChange={(newValue) => {
                                                            setUserdata(newValue);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>


                                            </div>

                                        </div>
                                        <hr className=''></hr>
                                        <div className='row justify-content-left'>



                                            <div className="form-group col-3 border-right border-secondary">
                                                <h5 className="card-title mb-3">Eğitim</h5>

                                                <select class="form-select" id="validationCustom04" required>
                                                    <option selected disabled value="">Okul Seçiniz...</option>
                                                    <option>İstanbul Gelişim Üniversitesi</option>
                                                </select>
                                                <br></br>
                                                <select class="form-select" id="validationCustom04" required>
                                                    <option selected disabled value="">Bölüm Seçiniz...</option>
                                                    <option>Elektrik-Elektronik Mühendisliği</option>
                                                </select>
                                                <br></br>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="Başlama Tarihi"
                                                        value={userdata.birthdate}
                                                        onChange={(newValue) => {
                                                            setUserdata(newValue);
                                                        }}
                                                       
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                                <br></br>
                                                <br></br>
                                            
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="Bitiş Tarihi"
                                                        value={userdata.birthdate}
                                                        onChange={(newValue) => {
                                                            setUserdata(newValue);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>

                                            </div>
                                            <div className="form-group col-3 border-right border-secondary">
                                                <h5 className="card-title mb-3">Tecrübe</h5>

                                                <select class="form-select" id="validationCustom04" required>
                                                    <option selected disabled value="">Firma Seçiniz...</option>
                                                    <option>Turkcell</option>
                                                </select>
                                                <br></br>
                                                <select class="form-select" id="validationCustom04" required>
                                                    <option selected disabled value="">Pozisyon Seçiniz...</option>
                                                    <option>.NET Developer</option>
                                                </select>
                                                <br></br>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="Başlama Tarihi"
                                                        value={userdata.birthdate}
                                                        onChange={(newValue) => {
                                                            setUserdata(newValue);
                                                        }}
                                                       
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                                <br></br>
                                                <br></br>
                                            
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="Bitiş Tarihi"
                                                        value={userdata.birthdate}
                                                        onChange={(newValue) => {
                                                            setUserdata(newValue);
                                                        }}
                                                       
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                                

                                            </div>
                                            <div className="form-group col-3 border-right border-secondary">
                                                <h5 className="card-title mb-3">Yabancı Dil</h5>

                                                <select class="form-select" id="validationCustom04" required>
                                                    <option selected disabled value="">Yabancı Dil Seçiniz...</option>
                                                    <option>İngilizce</option>
                                                </select>
                                                <br></br>
                                                <select class="form-select" id="validationCustom04" required>
                                                    <option selected disabled value="">Yetkinlik...</option>
                                                    <option>Ana Dil</option>
                                                    <option>Konuşma Dili</option>
                                                </select>
                                                

                                            </div>
                                            <div className="form-group col-3">
                                                <h5 className="card-title mb-3">Sertifika</h5>

                                                <input id="name" placeholder="Sertifika İsmi... " type="text" className="form-control" name="name" required autoFocus pattern="[0-9]{11}" title="Telefon Numarası 11 haneli olmalıdır,Boşluk içeremez!" />
                                                <br></br>
                                                <input id="name" placeholder="Kurum İsmi... " type="text" className="form-control" name="name" required autoFocus pattern="[0-9]{11}" title="Telefon Numarası 11 haneli olmalıdır,Boşluk içeremez!" />
                                                <br></br>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="Geçerlilik Başlama Tarihi"
                                                        value={userdata.birthdate}
                                                        onChange={(newValue) => {
                                                            setUserdata(newValue);
                                                        }}
                                                        
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                                <br></br>
                                                <br></br>
                                            
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="Geçerlilik Bitiş Tarihi"
                                                        value={userdata.birthdate}
                                                        onChange={(newValue) => {
                                                            setUserdata(newValue);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>

                                            </div>
                                        </div>

                                        <div className="form-group m-0">
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Kaydı Tamamla.
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="footer">
                            Copyright &copy; 2022 &mdash; Workup
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