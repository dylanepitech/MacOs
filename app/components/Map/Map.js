import React from "react";

const Map = () => {
  return (
    <div className="flex flex-col justify-center item-center pt-9 w-full h-full">
      <iframe
        className="w-full h-560 sm:h-570 lg:h-650"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41281.73322105673!2d5.83238144419582!3d43.087227263782445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9034047a1d23b%3A0x40819a5fd8fc8e0!2s83500%20La%20Seyne-sur-Mer!5e0!3m2!1sfr!2sfr!4v1703002474244!5m2!1sfr!2sfr"
        style={{ border: "Opx" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
