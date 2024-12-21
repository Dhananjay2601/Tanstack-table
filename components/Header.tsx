/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <Link href="/">
        <img
          src="https://zybra.in/wp-content/uploads/2016/12/2.png"
          alt="zybra logo"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
};

export default Header;
