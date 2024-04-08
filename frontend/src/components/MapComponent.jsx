import React from "react";

function MapComponent() {
  return (
    <div className="flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.87304769001!2d78.38076787505197!3d17.369840803310577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95fb6205f0db%3A0xe6865bace3385d44!2sPRIME%20FITNESS%20STUDIO!5e0!3m2!1sen!2sin!4v1712262319424!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-xl md:h-[35rem] h-[25rem] w-full "
      ></iframe>
    </div>
  );
}

export default MapComponent;
