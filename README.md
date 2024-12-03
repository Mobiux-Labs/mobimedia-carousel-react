# Dietpixels Carousel for React (formerly MobiMedia)

# @mobimedia/carousel-react

A carousel React component for displaying Dietpixels playlist in reels view.

## Installation

```bash
npm install @mobimedia/carousel-react
```

## Usage

* React Js
```jsx
import Carousel from '@mobimedia/carousel-react';

return <Carousel playlistId="<your-public-playlist-id>" />
```

* Next Js
```js
// ./MobiCarousel.jsx
"use client";
import Carousel from "@mobimedia/carousel-react";

const MobiCarousel = ({id}) => {
  return <Carousel playlistId={id} />;
};
export default MobiCarousel;

// ./index.jsx
// Dynamically Import the Carousel Component
const MobiCarousel = dynamic(() => import("./MobiCarousel"), {
  ssr: false,
});
<MobiCarousel playlistId="<your-public-playlist-id>" />
```
