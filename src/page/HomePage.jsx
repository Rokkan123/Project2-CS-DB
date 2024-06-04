import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>
        <Link to="weapons">GO WEAPONS</Link>
      </div>
    </>
  );
}

export default HomePage;
