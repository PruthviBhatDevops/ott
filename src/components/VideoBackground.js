import React, { useEffect, useState } from 'react'
import { OPTIONS } from "../utils/constants"

const VideoBackground = ({ id }) => {

  const [youtubeId, setYoutubeId] = useState("");

  const trailers = async () => {
    let data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, OPTIONS)
    const json = await data.json();
    const filteredTrailer = json.results.filter((video) => video.type == "Trailer");
    setYoutubeId(filteredTrailer.length ? filteredTrailer[0].key : data[0].key);
  }

  useEffect(() => {
    trailers();
  }, []);

  const src = `https://www.youtube.com/embed/${youtubeId}?&autoplay=1&mute=1`;

  return (
    <div>
      <iframe 
       src={src}
       className='w-screen aspect-video'
       title="YouTube video player" frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
