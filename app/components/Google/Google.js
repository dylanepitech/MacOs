import React from "react";

const Google = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h3 className="text-4xl tracking-wides">Googole image</h3>
        <input
          type="text"
          name=""
          id=""
          style={{
            background: "white",
            height: "30px",
            borderRadius: "20px",
            paddingLeft: "20px",
          }}
          placeholder="Taper pour rechercher..."
        />
      </div>
      <div className="flex flex-col justify-center items-center px-10 py-5">
        <h3 className="text-xl text-orange-500 py-3">
          Site web agence immobilière
        </h3>
        <p className="px-20 leading-7">
          Ce projet, penser pour une agence imoblilière intègre plusieur
          fonctionaliter intéréssente, notament une gestion d'administatrion
          global et une gestion spécifique pour les agents immobilier (création
          de bien, gestion de sont propre bien uniquement, contact par message
          intra...). L'affichage des annonces intègre une partie contact rapide
          pour des client potentiel non inscrit, aisi qu'une génération de bien
          aléatoire pour insiter a consulter plus d'annonce.
        </p>
      </div>
      <div className="google pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <img
          src="./img_projet/agence_1.png"
          alt="image_projet1"
          loading="lazy"
        />
        <img
          src="./img_projet/agence_2.png"
          alt="image_projet1"
          loading="lazy"
        />
        <img
          src="./img_projet/agence_3.png"
          alt="image_projet1"
          loading="lazy"
        />
        <img
          src="./img_projet/agence_4.png"
          alt="image_projet1"
          loading="lazy"
        />
        <img
          src="./img_projet/agence_5.png"
          alt="image_projet1"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Google;
