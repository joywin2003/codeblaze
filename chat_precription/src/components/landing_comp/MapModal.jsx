import React from "react";
import { forwardRef } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./maps";


export default forwardRef(function MapModal(props, ref) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDkACgsqx5pVn2bC9NfldAoFmyvLtMCsGY",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>; 
  return (
    <dialog ref={ref} className="bg-white p-8 rounded-md shadow-md w-96">
     <Map />;
      {/* <form onSubmit={(e) => e.preventDefault()} method="dialog">
          <button onClick={props.onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </form> */}
    </dialog>
  );
});
