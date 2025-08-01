"use client"

import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";

export default function App() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="bg-amber-600 py-26  ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl font-bold text-white text-center  iansui-regular">
          Signage & Printing <br /> Photo & Video Gallery</h1>
        <p className="w-2/3 text-center mx-auto py-8 text-md text-gray-300">
          The selection of Signage & Printing manufactured by Subak Signs & Print are not only of the highest quality, but are also available in a variety of options to ensure you find exactly what you’re looking for. With top-of-the-line materials, cutting-edge production technologies and a highly qualified team, we guarantee complete satisfaction.
        </p>

        <RowsPhotoAlbum photos={photos} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
}
