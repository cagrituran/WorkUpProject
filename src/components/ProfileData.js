import { useEffect, useState } from "react";
import Profile from './Profile';

export default function ProfileData() {
    const [userdata, usersetData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
           await fetch(`https://localhost:7079/api/User/1`)
          .then((response) => response.json())
          .then((data) => usersetData(data));
          }
          fetchData()//


      }, []);
  return (
    <Profile name={userdata.name} lastName={userdata.lastName} profileImage={userdata.profileImage} city={userdata.city} country={userdata.country}></Profile>
  )
}
