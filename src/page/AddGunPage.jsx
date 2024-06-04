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
      navigate("/");
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
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Gun Name"
            value={newGun.name}
            onChange={handleChange}
          />
          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="image"
            placeholder="Image URL"
            value={newGun.image}
            onChange={handleChange}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={newGun.description}
            onChange={handleChange}
          ></textarea>

          <label>Damage</label>
          <input
            className="form-control mb-4"
            type="number"
            name="damage"
            placeholder="The damage"
            value={newGun.damage}
            onChange={handleChange}
          />

          <label>Kill Reward</label>
          <input
            className="form-control mb-4"
            type="number"
            name="kill_reward"
            placeholder="Reward"
            value={newGun.kill_reward}
            onChange={handleChange}
          />

          <label>Rounds per minute</label>
          <input
            className="form-control mb-4"
            type="number"
            name="rate_of_fire"
            placeholder="Ex: 20, 30, 500"
            value={newGun.rate_of_fire}
            onChange={handleChange}
          />

          <label>Mag size</label>
          <input
            className="form-control mb-4"
            type="number"
            name="magazine_size"
            placeholder="How big?"
            value={newGun.magazine_size}
            onChange={handleChange}
          />

          <label>Ammo in reserve</label>
          <input
            className="form-control mb-4"
            type="number"
            name="max_ammo"
            placeholder="Ammo Reserve"
            value={newGun.max_ammo}
            onChange={handleChange}
          />
          <label>Used by which team</label>
          {/* <input
            className="form-control mb-4"
            type="text"
            name="team"
            placeholder="Team"
            value={newGun.team}
            onChange={handleChange}
          /> */}

          <select
            className="form-select"
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

          <label>Video link</label>
          <input
            className="form-control mb-4"
            type="text"
            name="video"
            placeholder="Link"
            value={newGun.video}
            onChange={handleChange}
          />

          <button className="btn btn-primary btn-round">Add New Weapon</button>
        </form>
      </div>
    </>
  );
}

export default AddGunPage;
