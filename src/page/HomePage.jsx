import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

function HomePage() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1080px)" });
  return (
    <>
      <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
        <h1 className="text-white">This homepage is TRASH</h1>
        <p className="text-white">work my brother</p>
        <h2 className="text-white">CS2 weapon list</h2>
        <br></br>
        <p className="text-white">
          This webpage contains a list of CS2 weapons with damage values price
          etc. not including any penetration values.
        </p>
        <br></br>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=B_u0g8_RjiU"}
          controls={true}
        />
        <br></br>
        <br></br>
        <br></br>
        {isDesktop && (
          <div className="postion-relative">
            <img
              src="https://csgostash.com/storage/img/skin_sideview/s114.png?id=f9dae18c8d69bfed6c7a"
              height="125px"
              width="auto"
              className="position-absolute bottom-50 start-0"
            ></img>
            <img
              className="butterfly"
              src="https://cdn.skinport.com/cdn-cgi/image/width=512,height=384,fit=pad,format=avif,quality=85,background=transparent/images/screenshots/322971290/playside.png"
            ></img>
          </div>
        )}

        {/* Header of the game
        short explanation of what the data is about and about the game
        Quick video that shows why people get a rush playing or watching this game. 
        */}
      </div>
    </>
  );
}

export default HomePage;
