import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


const API_URL = "https://counter-strike-weapon-api.adaptable.app/"
function EditGunDetails(props) {
  const [gun, setGun] = useState({name:"",
    image:"",
    price:"",
    damage:"",
    description:"",
    kill_reward:"",
    rate_of_fire:"",
    run_speed:"",
    magazine_size:"",
    max_ammo:"",
    team:"",
    video:"",
  })
  const {weaponId}= useParams()
  const navigate= useNavigate()

  useEffect(() => {
    const getWeaponToEdit = async () => {
      try {
        const response = await axios.get(`${API_URL}/weapons/${weaponId}`);
        console.log(response,"gun array");
       setGun(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    getWeaponToEdit();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/weapons/${weaponId}`, 
       gun
      );
      console.log(response,"plz work");
      navigate("/weapons");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const wantToDelete = confirm("Do you really want to delete?");

      if (wantToDelete) {
        const response = await axios.delete(`${API_URL}/weapons/${weaponId}`);
        console.log(response);
        navigate("/weapons");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setGun(prev => ({...prev, [e.target.name] : e.target.value}))
  }

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
            value={gun.name}
            onChange={handleChange}
          />
          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="image"
            placeholder="Image URL"
            value={gun.image}
            onChange={handleChange}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={gun.description}
            onChange={handleChange}
          ></textarea>

          <label>Damage</label>
          <input
            className="form-control mb-4"
            type="number"
            name="damage"
            placeholder= "The damage"
            value={gun.damage}
            onChange={handleChange}
          />

          <label>Kill Reward</label>
          <input
            className="form-control mb-4"
            type="number"
            name="kill_reward"
            placeholder="Reward"
            value={gun.kill_reward}
            onChange={handleChange}
          />

          <label>Rounds per minute</label>
          <input
            className="form-control mb-4"
            type="number"
            name="rate_of_fire"
            placeholder="Ex: 20, 30, 500"
            value={gun.rate_of_fire}
            onChange={handleChange}
          />

          <label>Mag size</label>
            <input
              className="form-control mb-4"
              type="number"
              name="magazine_size"
              placeholder="How big?"
              value={gun.magazine_size}
              onChange={handleChange}
            />


          <label>Ammo in reserve</label>
          <input
            className="form-control mb-4"
            type="number"
            name="max_ammo"
            placeholder="Ammo Reserve"
            value={gun.max_ammo}
            onChange={handleChange}
          />
          <label>Used by which team</label>
          <input
          
            className="form-control mb-4"
            type="text"
            name="team"
            placeholder="Team"
            value={gun.team}
            onChange={handleChange}
          />
          <label>Video link</label>
          <input
            className="form-control mb-4"
            type="text"
            name="video"
            placeholder="Link"
            value={gun.video}
            onChange={handleChange}
          />
     
          
          <button className="btn btn-primary btn-round">Edit Weapon Details</button>
          <button
            onClick={() => handleDelete(gun, setGun.id)}
            type="button"
            className="btn bg-danger-subtle m-2"
          >
            Delete
          </button>
        </form>
      </div>
    </>
  );
}

export default EditGunDetails
