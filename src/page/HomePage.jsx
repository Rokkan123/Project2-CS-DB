
import axios from 'axios'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  const [guns, setGuns]=useState(null)

  
  useEffect(() => {
    const fetchGuns = async () => {
      try {
        const response = await axios.get(
          "https://counter-strike-weapon-api.adaptable.app/weapons"
        );

        setGuns(response.data);
      
      } catch (error) {
        console.log(error);
      }
    };

    fetchGuns();
  }, []);


  return (
   <>
     <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
      
        {guns &&
          guns.map((gun, i) => {
            return (
              <div key={i}>
                <Link to={"/weapons/" + gun.id}>
                  <div
                    className="card m-2 p-2 text-center"
                    style={{ width: "24rem", height: "18rem" }}
                  >
                    <div className="card-body">
                      <img
                        src={gun.image}
                          
                        
                        style={{ height: "6rem" }}
                        alt={"image of" + gun.name}
                      />
                      <h5 className="card-title text-truncate mt-2">
                        {gun.name}
                      </h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{gun.damage}</em>
                      </h6>
                      {/* <p className="card-text">
                        Created by: {beer.contributed_by}
                      </p> */}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
   </>
  )
}

export default HomePage
