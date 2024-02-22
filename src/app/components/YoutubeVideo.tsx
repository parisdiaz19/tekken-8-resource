import React from "react";

export default function YoutubeVideo(key: string, source: string) {
  return (
    <iframe
      width="560"
      height="315"
      src={source}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
}
