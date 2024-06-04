import axios from 'axios'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom";


function GunDetails() {
  const [gun, setGun]=useState(null)
  const { weaponId } = useParams();
  const navigate = useNavigate();
  console.log(weaponId, "thisgun")

  
  useEffect(() => {
    
    const fetchGunDetails = async () => {
      console.log("wama")
      try {
        const response = await axios.get(
          `https://counter-strike-weapon-api.adaptable.app/weapons/${weaponId}`
        );
        

        setGun(response.data);
        console.log(response,"why do i exist")
        console.log(weaponId)
      } catch (error) {
        console.log(error);
      }
    };

    fetchGunDetails();
  }, [weaponId]);

 return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {gun && (
        <>
 <img
            src={gun.image}
            alt="Gun Image"
            height="300px"
            width="auto"
          />

          <h3>{gun.name}</h3>
          <p><b>Gun Price:</b> ${gun.price}</p>
          <p><i>{gun.description}</i></p>
          <p><b>Damage per shot or pellet:</b> {gun.damage}</p>
          <p><b>Reward per kill:</b> ${gun.kill_reward}</p>
          <p><b>Rounds per minute:</b> {gun.rate_of_fire}</p>
          <p><b>Run speed while equipped:</b> {gun.run_speed}</p>
          <p><b>Mag size:</b> {gun.magazine_size}</p>
          <p><b>Ammo in reserve:</b> {gun.max_ammo}</p>
          <p><b>Team:</b> {gun.team}</p>


          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default GunDetails
