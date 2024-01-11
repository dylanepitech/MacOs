import React from "react";

const Mail = () => {
  return (
    <main className="z w-full h-full bg-noir2 flex flex-col justify-center items-center">
      <form
        action=""
        className="flex flex-col justify-center items-center pt-10 md:pt-10"
      >
        <div className="pt-5">
          <label htmlFor="destinataire" className="text-lettre">
            À:
            <input
              type="mail"
              id="destinataire"
              value={"dylan.bouraoui83@gmail.com"}
              disabled
            />
          </label>
        </div>
        <div className="pt-5">
          <label htmlFor="objet" className="text-lettre">
            Objet:
            <input type="text" id="objet" />
          </label>
        </div>
        <div className="pt-5">
          <label htmlFor="sender" className="text-lettre">
            De:
            <input type="mail" id="sender" />
          </label>
        </div>
        <div className="pt-5">
          <label htmlFor="sender" className="text-lettre">
            <textarea className="h-400 lg:h-450 w-50"></textarea>
          </label>
        </div>
        <button type="submit" className="pb-2">
          <img src="./image_png/send.png" width={40} height={40} alt="" />
        </button>
      </form>
    </main>
  );
};

export default Mail;
