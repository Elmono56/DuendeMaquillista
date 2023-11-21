import React from "react";

const NotificationButton = ({ hayNotificacionesPendientes }) => {
  return (
    <button className="relative relative p-2 bg-pink-lighter-b hover:bg-hover-pink text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-hover-pink">
      <span>Notificaciones</span>
      {hayNotificacionesPendientes && (
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full"></span>
      )}
    </button>
  );
};

export default NotificationButton;
