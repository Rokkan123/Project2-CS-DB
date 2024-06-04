import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddGunPage() {
const navigate=useNavigate() 

// function CreateProjectPage(props) {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
  
//     const navigate = useNavigate();
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await axios.post(API_URL + "/projects", {
//           title,
//           description,
//         });
//         console.log(response);
//         navigate("/projects");
//       } catch (error) {
//         console.log(error);
//       }
//     };
  

     //another approach with a single state
  // const [newBeer, setNewBeer] = useState({
  //   name: "",
  //   tagline: "",
  //   description: "",
  //   imageUrl: "",
  //   first_brewed: "",
  //   brewers_tips: "",
  //   attenuation_level: 0,
  //   contributed_by: "",
  // });
  // handleChange for a single state with multiple properties
  // const handleChange = (e) => {
  //   setNewBeer(prev => ({...prev, [e.target.name] : e.target.value}))
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          name,
          tagline,
          description,
          imageUrl,
          first_brewed: firstBrewed,
          brewers_tips: brewersTips,
          attenuation_level: attenuationLevel,
          contributed_by: contributedBy,
        }
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
          placeholder="Beer Name"
          value={name}
          onChange={handleName}
        />
        <label>Tagline</label>
        <input
          className="form-control mb-4"
          type="text"
          name="tagline"
          placeholder="Beer Tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label className="form-label">Description</label>
        <textarea
          className="form-control mb-4"
          type="text"
          name="description"
          placeholder="Description"
          rows="3"
          value={description}
          onChange={handleDescription}
        ></textarea>

        <label>Image</label>
        <input
          className="form-control mb-4"
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImageUrl}
        />

        <label>First Brewed</label>
        <input
          className="form-control mb-4"
          type="text"
          name="firstBrewed"
          placeholder="Date - MM/YYYY"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />

        <label>Brewer Tips</label>
        <input
          className="form-control mb-4"
          type="text"
          name="brewersTips"
          placeholder="..."
          value={brewersTips}
          onChange={handleBrewersTips}
        />

        <label>Attenuation Level</label>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              %
            </span>
          </div>
          <input
            className="form-control mb-4"
            type="number"
            name="attenuationLevel"
            value={attenuationLevel}
            onChange={handleAttenuationLevel}
            min={0}
            max={100}
          />
        </div>

        <label>Contributed By</label>
        <input
          className="form-control mb-4"
          type="text"
          name="contributedBy"
          placeholder="Contributed by"
          value={contributedBy}
          onChange={handleContributedBy}
        />
        <button className="btn btn-primary btn-round">Add Beer</button>
      </form>
    </div>
  </>
  )
}

export default AddGunPage
