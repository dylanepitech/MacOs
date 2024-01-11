import React from "react";

const Dev = () => {
  return (
    <div className="z flex flex-col justify-center item-center w-full h-full lg:pt-97 pt-98 ">
      <div className="flex justify-center items-center flex-col gap-5 px-5 py-4 mt-24 md:mt-10">
        <img src="./img/emojy.png" height={90} width={90} alt="Profile image" />
        <h1 className="md:text-4xl text-xl px-10 text-slate-200 pt-2">
          Dylan Bouraoui
        </h1>
        <p className="md:text-lg">Devellopeur web full stack</p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-7 mt-4">
          <div className="flex flex-row gap-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p> 06 09 21 69 08</p>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <p>La seyne sur mer, 83500</p>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <p>dylan.bouraoui83@gmail.com</p>
          </div>
        </div>
        <h2 className="py-5 text-xl md:text-2xl text-orange-500">
          Une présentation ?
        </h2>
        <p>
          Passionné par le développement et l'informatique, j'ai décidé de me
          reconvertir dans ce domaine. Fort de mon expérience professionnelle
          précédente ou ,la rigueur,la ponctualité et le contact avec les
          clients étais essentiels.
        </p>
        <h2 className="py-6 text-xl md:text-2xl text-orange-500">
          Language et framewoks
        </h2>
        <div className="dev grid grid-cols-3 md:grid-cols-4  align-middle justify-items-center gap-10">
          <img src="./image_png/sql.png" width={60} height={60} alt="" />
          <img src="./image_png/mongo.png" width={60} height={60} alt="" />
          <img src="./image_png/next.png" width={60} height={60} alt="" />
          <img src="./image_png/mongo.png" width={60} height={60} alt="" />
          <img src="./image_png/node.png" width={60} height={60} alt="" />
          <img src="./image_png/react.png" width={60} height={60} alt="" />
          <img src="./image_png/laravel.png" width={60} height={60} alt="" />
          <img src="./image_png/symfony.png" width={60} height={60} alt="" />
          <img src="./image_png/wordpress.png" width={60} height={60} alt="" />
        </div>
        <h2 className="py-6 text-lg md:text-2xl text-orange-500">
          Un petit tour sur mes réseaux ?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center items-center gap-5">
            <h2>Mon Git-hub</h2>
            <img
              src="./image_png/githu_qr.png"
              height={200}
              width={200}
              alt="PNG github"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <h2>Mon linkdine</h2>
            <img
              src="./image_png/link_qr.png"
              height={200}
              width={200}
              alt="PNG github"
            />
          </div>
        </div>
        <a
          className=" text-xl md:text-2xl text-orange-700 border p-2 mt-4 no-underline cursor-pointer"
          download
          href="/img/cv.jpg"
        >
          Télécharger mon CV.
        </a>
      </div>
    </div>
  );
};

export default Dev;
