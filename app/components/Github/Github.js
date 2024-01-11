import React from "react";

const Github = () => {
  const handleClick = () => {
    window.location.href = "https://github.com/NightDev83";
  };

  return (
    <div className="flex flex-col justify-center item-center w-full h-full gap-5">
      <nav className="navgit bg-black h-14 w-full flex flex-row items-center justify-between px-3">
        <div className="flex flex-row gap-5 items-center">
          <img
            src="./Github_image/menu.png"
            height={25}
            width={25}
            alt="Menu burger"
            onClick={() => handleClick()}
          />
          <img
            src="./Github_image/git-cat.png"
            height={25}
            width={25}
            alt="Cat git"
            onClick={() => handleClick()}
          />
          <p>Dashboard</p>
        </div>
        <div>
          <img
            src="./Github_image/dcorp-logo.png"
            height={25}
            width={25}
            alt="Dcorp logo"
            onClick={() => handleClick()}
          />
        </div>
      </nav>
      <div className=" w-25 sm:w-30 h-28 bg-transparent ms-3 sm:mx-auto my-6 border-b-2 flex flex-row items-center justify-between">
        <div>
          <h2 className="text-blue-400 text-md md:text-xl">
            Laravel_codestart
            <span className="border border-gray-700 px-2 py-1 rounded-full text-xs text-gray-500">
              public
            </span>
          </h2>
          <p className="text-gray-500 text-xs md:text-md pt-1">
            CodeStart - Laravel Project for Beginners
          </p>
        </div>
        <a
          className="border text-center border-gray-500 py-1 px-3 rounded-md hover:text-blue-800 hover:cursor-pointer text-xs lg:text-lg"
          href="https://github.com/NightDev83/Laravel_CodeStart"
        >
          Acceder au repository
        </a>
      </div>
      <div className=" w-25 sm:w-30 h-28 bg-transparent ms-3 sm:mx-auto my-6 border-b-2 flex flex-row items-center justify-between">
        <div>
          <h2 className="text-blue-400 text-md md:text-xl">
            Laravel_codestart
            <span className="border border-gray-700 px-2 py-1  rounded-full text-xs text-gray-500">
              public
            </span>
          </h2>
          <p className="text-gray-500 text-xs md:text-md pt-1">
            CodeStart - Laravel Project for Beginners
          </p>
        </div>
        <a
          className="border text-center border-gray-500 py-1 px-3 rounded-md hover:text-blue-800 hover:cursor-pointer text-xs lg:text-lg"
          href="https://github.com/NightDev83/Laravel_CodeStart"
        >
          Acceder au repository
        </a>
      </div>
    </div>
  );
};

export default Github;
