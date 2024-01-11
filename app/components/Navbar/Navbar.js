import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [dateFormatee, setDateFormatee] = useState("");

  useEffect(() => {
    // Fonction pour formater la date
    const formaterDateActuelle = () => {
      const dateActuelle = new Date();
      const jourDeLaSemaine = dateActuelle.toLocaleDateString("fr-FR", {
        weekday: "short",
      });
      const capitalized =
        jourDeLaSemaine.charAt(0).toUpperCase() + jourDeLaSemaine.slice(1);
      const jourDuMois = dateActuelle.getDate();
      const mois = dateActuelle.toLocaleDateString("fr-FR", { month: "short" });
      const heures = dateActuelle.getHours();
      const minutes = dateActuelle.getMinutes();
      const dateFormatee = `${capitalized} ${jourDuMois} ${mois} à ${heures}:${minutes}`;
      const dateFormatee2 = `${capitalized} ${jourDuMois} ${mois} à ${heures}:0${minutes}`;

      minutes < 10
        ? setDateFormatee(dateFormatee2)
        : setDateFormatee(dateFormatee);
    };

    formaterDateActuelle();
  }, []);

  return (
    <nav
      className="bg-slate-200 lg:h-9 w-screen px-4 flex lg:flex-row items-center justify-between flex-col text-xs sm:text-xl  gap-2 sm:gap-5 h-20"
      style={{ backgroundColor: "rgb(234, 234, 227)" }}
    >
      <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-7">
        <img
          src="./img/navbar_logo.png"
          height={30}
          width={30}
          alt="Logo navbar"
        />
        <p className="text-black font-bold">Finder</p>
        <p className="text-black">Fichier</p>
        <p className="text-black">Présentation</p>
        <p className="text-black">Aller</p>
        <p className="text-black">Fenêtre</p>
        <p className="text-black">Aide</p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-7">
        <img
          src="./image_png/batery.png"
          height={30}
          width={30}
          alt="Battery"
        />
        <img
          src="./image_png/wifi.png"
          height={25}
          width={25}
          alt="Wfi image"
        />
        <img
          src="./image_png/loupe.png"
          height={25}
          width={25}
          alt="Search image"
        />
        <img
          src="./image_png/commutateur.png"
          height={20}
          width={20}
          alt="Commutateur image"
        />
        <p className="text-black">{dateFormatee}</p>
      </div>
    </nav>
  );
};

export default Navbar;
