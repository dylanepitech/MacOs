import React, { useState, useEffect, useRef } from "react";
import Mail from "../Mail/Mail";
import Github from "../Github/Github";
import Map from "../Map/Map";
import Dev from "../Dev/Dev";
import Corbeille from "../Corbeille/Corbeille";
import Google from "../Google/Google";

const Dock = () => {
  const [mapActive, setMapActive] = useState(false);
  const [gitActive, setGitActive] = useState(false);
  const [devActive, setDevActive] = useState(false);
  const [mailActive, setMailActive] = useState(false);
  const [corbeilleActive, setCorbeilleActive] = useState(false);
  const [fenetreActive, setFenetreActive] = useState(false);
  const [googleActive, setGoogleActive] = useState(false);

  const googleclick = () => {
    setFenetreActive((prevfenetreActive) => !prevfenetreActive);
    setGoogleActive((prevgoogleActive) => !prevgoogleActive);
    setGitActive(false);
    setMailActive(false);
    setDevActive(false);
    setCorbeilleActive(false);
    if (fenetreActive) {
      setGoogleActive(false);
    }
  };

  const planClick = () => {
    setFenetreActive((prevfenetreActive) => !prevfenetreActive);
    setMapActive((prevMapActive) => !prevMapActive);
    setGitActive(false);
    setMailActive(false);
    setDevActive(false);
    setGoogleActive(false);
    setCorbeilleActive(false);
    if (fenetreActive) {
      setMapActive(false);
    }
  };
  const gitClick = () => {
    setFenetreActive((prevfenetreActive) => !prevfenetreActive);
    setGitActive((prevGitActive) => !prevGitActive);
    setMapActive(false);
    setMailActive(false);
    setDevActive(false);
    setGoogleActive(false);
    setCorbeilleActive(false);
    if (fenetreActive) {
      setGitActive(false);
    }
  };
  const devclick = () => {
    setFenetreActive((prevfenetreActive) => !prevfenetreActive);
    setDevActive((prevDevActive) => !prevDevActive);
    setGitActive(false);
    setMailActive(false);
    setMapActive(false);
    setGoogleActive(false);
    setCorbeilleActive(false);
    if (fenetreActive) {
      setDevActive(false);
    }
  };
  const mailclick = () => {
    setFenetreActive((prevfenetreActive) => !prevfenetreActive);
    setMailActive((prevMailActive) => !prevMailActive);
    setGitActive(false);
    setMapActive(false);
    setDevActive(false);
    setGoogleActive(false);
    setCorbeilleActive(false);
    if (fenetreActive) {
      setMailActive(false);
    }
  };
  const corbeilleclick = () => {
    setFenetreActive((prevfenetreActive) => !prevfenetreActive);
    setCorbeilleActive((prevcorbeilleActive) => !prevcorbeilleActive);
    setGitActive(false);
    setMapActive(false);
    setDevActive(false);
    setMailActive(false);
    setGoogleActive(false);
    if (fenetreActive) {
      setCorbeilleActive(false);
    }
  };
  const fermeture = () => {
    setFenetreActive((prevfenetreActive) => !prevfenetreActive);
    setGitActive(false);
    setMapActive(false);
    setDevActive(false);
    setMailActive(false);
    setGoogleActive(false);
    setCorbeilleActive(false);
  };

  return (
    <main className="absolute bottom-5 flex flex-row justify-center items-center  w-full">
      {fenetreActive && (
        <div className="fenetre absolute bottom-28 sm:bottom-36 lg:bottom-28 bg-noir2 w-75 overflow-y-scroll h-600 lg:h-700 rounded-lg flex flex-col">
          <div className="fixed z-20 box-border w-75 h-10 bg-noir rounded-t-lg flex flex-row gap-3 items-center px-3">
            <div
              onClick={fermeture}
              className="h-3 w-3 bg-rouge rounded-full rouge flex flex-row justify-center item-center"
            ></div>
            <div className="h-3 w-3 bg-jaune rounded-full jaune"></div>
            <div className="h-3 w-3 bg-vert rounded-full vert"></div>
          </div>
          {mapActive && <Map />}
          {gitActive && <Github />}
          {devActive && <Dev />}
          {mailActive && <Mail />}
          {corbeilleActive && <Corbeille />}
          {googleActive && <Google />}
        </div>
      )}

      <div className="dock w-11/12 md:w-8/12 lg:w-8/12 xl:w-6/12 flex flex-row justify-center items-center gap-2 lg:gap-4">
        <img
          src="./dock_image/google_img.png"
          height={80}
          width={80}
          alt="Google logo"
          id="dev"
          onClick={googleclick}
        />
        <img
          src="./dock_image/plan_img.png"
          height={80}
          width={80}
          alt="Plan logo"
          id="plan"
          onClick={planClick}
        />
        <img
          src="./dock_image/dev_img.png"
          height={80}
          width={80}
          alt="Dev logo"
          id="dev"
          onClick={devclick}
        />
        <img
          src="./dock_image/git_img.png"
          height={80}
          width={80}
          alt="github logo"
          id="git"
          onClick={gitClick}
        />
        <img
          src="./dock_image/mail_img.png"
          height={80}
          width={80}
          alt="Mail logo"
          id="mail"
          onClick={mailclick}
        />
        <img
          src="./dock_image/corbeille.png"
          height={80}
          width={80}
          alt="Corbeille logo"
          id="corbeille"
          onClick={corbeilleclick}
        />
      </div>
    </main>
  );
};

export default Dock;
