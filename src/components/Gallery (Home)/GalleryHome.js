import React from 'react';
import './galleryHome.css';
import gallery from '../../assets/home-gallery.png';

function GalleryHome() {
  return (
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="p-10">
          <div className="pl-24">
            <img
              src={gallery}
              alt="gallery-home-link"
              className="object-contain md:object-scale-down"
            ></img>
          </div>
        </div>

        <div className="p-10 flex items-center justify-center flex-col text-center">
          <h1 className="pb-5 text-3xl font-medium font-['Mingzat']">
            GALLERY
          </h1>
          <p className="pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-6 bg-galleryButton hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

export default GalleryHome;
