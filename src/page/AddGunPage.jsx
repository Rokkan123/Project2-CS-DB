import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddGunPage() {
  const navigate = useNavigate();

  const [newGun, setNewGun] = useState({
    image: "",
    name: "",
    price: "",
    description: "",
    damage: "",
    kill_reward: "",
    rate_of_fire: "",
    run_speed: "",
    magazine_size: "",
    max_ammo: "",
    team: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://counter-strike-weapon-api.adaptable.app/weapons",

        newGun
      );

      //   navigate("/weapons");
      navigate("/weapons");
      setNewGun({
        image: "",
        name: "",
        price: "",
        description: "",
        damage: "",
        kill_reward: "",
        rate_of_fire: "",
        run_speed: "",
        magazine_size: "",
        max_ammo: "",
        team: "",
        video: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setNewGun((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4 w-25 d-flex text-center text-white">
        <h2>Add Weapon</h2>
        <i>
          "Watch out. These boys have got a bit of an arsenal and they don't
          mind using it!"
        </i>
      </div>
      <div className="d-inline-flex flex-column w-100 p-4 w-25 d-flex text-center">
        <form onSubmit={handleSubmit}>
          <label className="text-white text-uppercase">Name</label>
          <input
            className="form-control mb-4 w-25 d-flex mx-auto mx-auto opacity-75"
            type="text"
            name="name"
            placeholder="Gun Name"
            value={newGun.name}
            onChange={handleChange}
          />
          <label className="text-white">Image</label>
          <input
            className="form-control mb-4 w-25 d-flex mx-auto"
            type="text"
            name="image"
            placeholder="Image URL"
            value={newGun.image}
            onChange={handleChange}
          />

          <label className="form-label text-white">Description</label>
          <textarea
            className="form-control mb-4 w-25 d-flex mx-auto"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={newGun.description}
            onChange={handleChange}
          ></textarea>

          <label className="text-white">Damage</label>
          <input
            className="form-control mb-4 w-25 d-flex mx-auto"
            type="number"
            name="damage"
            placeholder="The damage"
            value={newGun.damage}
            onChange={handleChange}
          />

          <label className="text-white">Kill Reward</label>
          <input
            className="form-control mb-4 w-25 d-flex mx-auto w-25 d-flex mx-auto"
            type="number"
            name="kill_reward"
            placeholder="Reward"
            value={newGun.kill_reward}
            onChange={handleChange}
          />

          <label className="text-white">Rounds per minute</label>
          <input
            className="form-control mb-4 w-25 d-flex mx-auto"
            type="number"
            name="rate_of_fire"
            placeholder="Ex: 20, 30, 500"
            value={newGun.rate_of_fire}
            onChange={handleChange}
          />

          <label className="text-white">Mag size</label>
          <input
            className="form-control mb-4 w-25 d-flex mx-auto"
            type="number"
            name="magazine_size"
            placeholder="How big?"
            value={newGun.magazine_size}
            onChange={handleChange}
          />

          <label className="text-white">Ammo in reserve</label>
          <input
            className="form-control mb-4 w-25 d-flex mx-auto"
            type="number"
            name="max_ammo"
            placeholder="Ammo Reserve"
            value={newGun.max_ammo}
            onChange={handleChange}
          />
          <label className="text-white">Used by which team</label>
          {/* <input
            className="form-control mb-4 w-25 d-flex mx-auto"
            type="text"
            name="team"
            placeholder="Team"
            value={newGun.team}
            onChange={handleChange}
          /> */}

          <select
            className="form-select  w-25 d-flex mx-auto"
            aria-label="Default select example"
            name="team"
            value={newGun.team}
            onChange={handleChange}
          >
            <option>Open this select menu</option>
            <option>T</option>
            <option>CT</option>
            <option>Both</option>
          </select>

          <label className="text-white">Video link</label>
          <input
            className="form-control mb-4 w-25 d-flex mx-auto"
            type="text"
            name="video"
            placeholder="Link"
            value={newGun.video}
            onChange={handleChange}
          />

          <button className="btn btn-primary btn-round">Add New Weapon</button>
        </form>
        <br></br>
        <button
          className="btn btn-primary btn-round w-15 mx-auto"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default AddGunPage;
