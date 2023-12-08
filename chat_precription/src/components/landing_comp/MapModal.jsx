import React from "react";

export default function MapModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center modal-overlay">
      <dialog open className="bg-white p-8 rounded-md shadow-md w-96">
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
      </dialog>
    </div>
  );
}
