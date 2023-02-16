import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="font-black flex justify-between items-center">
          {/* logo */}
          <Link to="#" className=" text-3xl">
            <span className="text-gradient">F</span>M
          </Link>
          <button className="btn btn-sm">Resume</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
