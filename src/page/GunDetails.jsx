import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import EditGunDetails from "./EditGunDetails";
import React from "react";
import ReactPlayer from "react-player";
import background from "../assets/BRO_RED_PANDA_STAND.jpg";

function GunDetails() {
  const [gun, setGun] = useState(null);
  const { weaponId } = useParams();
  const navigate = useNavigate();
  console.log(weaponId, "thisgun");

  useEffect(() => {
    const fetchGunDetails = async () => {
      console.log("wama");
      try {
        const response = await axios.get(
          `https://counter-strike-weapon-api.adaptable.app/weapons/${weaponId}`
        );

        setGun(response.data);
        console.log(response, "why do i exist");
        console.log(weaponId);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGunDetails();
  }, [weaponId]);

  const hasVideo = gun?.video && gun.video.length > 0;

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {gun && (
        <>
          <img src={gun.image} alt="Gun Image" height="300px" width="auto" />

          <h3 className="text-light">{gun.name}</h3>
          <p className="text-light">
            <b>Gun Price:</b> ${gun.price}
          </p>
          <p className="text-light">
            <i>{gun.description}</i>
          </p>
          <p className="text-light">
            <b>Damage per shot or pellet:</b> {gun.damage}
          </p>
          <p className="text-light">
            <b>Reward per kill:</b> ${gun.kill_reward}
          </p>
          <p className="text-light">
            <b>Rounds per minute:</b> {gun.rate_of_fire}
          </p>
          <p className="text-light">
            <b>Run speed while equipped:</b> {gun.run_speed}
          </p>
          <p className="text-light">
            <b>Mag size:</b> {gun.magazine_size}
          </p>
          <p className="text-light">
            <b>Ammo in reserve:</b> {gun.max_ammo}
          </p>
          <p className="text-light">
            <b>Team:</b> {gun.team}-side
          </p>

          {hasVideo && ( // Render player only if video URL is valid
            <ReactPlayer url={gun.video} controls={true} />
          )}

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          <button
            className="navbutton"
            onClick={() => {
              navigate(`/weapons/${weaponId}/edit`);
            }}
          >
            Edit Gun
          </button>
        </>
      )}
    </div>
  );
}

export default GunDetails;
