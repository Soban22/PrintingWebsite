
import React from "react";
import "./zero.css";
import { Link } from "react-router-dom";

const Zero = () => {
  return (
    <div className="Zero">
      <p>
        <strong>Umar Graphics © 2025</strong> All Rights Reserved
      </p>
      <p>
        Developed With Love By <Link to={'https://www.infinitestudio.online/'} className="highlight">Infinte Studios</Link>
      </p>
    </div>
  );
};

export default Zero;
