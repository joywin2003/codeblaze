import React from "react";
import Map from "./map";
import { useLoadScript } from "@react-google-maps/api";
import { forwardRef } from "react";

export default forwardRef(function MapModal(props, ref) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDkACgsqx5pVn2bC9NfldAoFmyvLtMCsGY",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <dialog ref={ref} className="relative bg-white rounded-md mb-32 shadow-md w-96 h-96">
      <button className="absolute top-2 right-2 text-black rounded-md">X</button>
      <Map />
    </dialog>
  );
});
{
  /* <dialog open className="bg-white p-8 rounded-md shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Map</h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Proin tincidunt turpis vitae ultricies cursus. Fusce
          suscipit, felis vitae luctus mattis, sapien elit vestibulum libero,
          nec viverra ipsum nisi nec libero.
        </p>
        <form onSubmit={(e) => e.preventDefault()} method="dialog">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </form>
      </dialog> */
}
