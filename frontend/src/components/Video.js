import React, { useState } from "react";
import "./Style.css";
import thumbnail from "./images/Image3_test.jpg";
import thumbnail2 from "./images/Image4.jpg";
import thumbnail3 from "./images/Image5.jpg";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/sQI40rux48c",
    thumbnail: thumbnail2,
    title: "Faith Feature - Jay Koshy",
    type: "youtube"
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/sQI40rux48c",
    thumbnail: thumbnail,
    title: "Local Testimony",
    type: "local"
  },
  {
    id: 3,
    src: require("../components/videos/video1.mp4"),
    thumbnail: thumbnail,
    title: "Local Testimony",
    type: "local"
  }
];

const podcasts = [
  {
    id: 4,
    src: "https://620bf9fa719102-98329246.castos.com/player/1637848",
    thumbnail: thumbnail3,
    title: "Campus Ministry ft. Jay and Josh Koshy"
  },
  {
    id: 5,
    src: "https://620bf9fa719102-98329246.castos.com/player/1767696",
    thumbnail: thumbnail3,
    title: "Trusting in God ft. Grecia Vasquez & Ana Ruth Villareal Garcia"
  }
];

const VideoTestimony = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleVideoClick = (video) => {
    if (video.type === "local") {
      const videoElement = document.getElementById(`video-${video.id}`);
      videoElement.muted = false;
      videoElement.play();
    }
  };

  const handlePodcastClick = (podcast) => {
    window.open(podcast.src, "_blank");
  };

  return (
    <div className="container text-center media-container">
      {/* 🔹 VIDEO SECTION */}
      <div className="media-section">
        <h2>Videos</h2>
        <div className="media-row">
          {videos.map((video) => (
            <div key={video.id} className="media-card video-card">
            {hoveredVideo === video.id ? (
              <iframe
                src={`${video.src}?autoplay=1&mute=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="300"
                height="200"
                onMouseOut={() => setHoveredVideo(null)}
              />
            ) : (
              <img
                src={video.thumbnail}
                alt={video.title}
                onMouseOver={() => setHoveredVideo(video.id)}
              />
            )}
            <h4>{video.title}</h4>
          </div>
            // <div key={video.id} className="media-card video-card">
            //   {hoveredVideo === video.id ? (
            //     video.type === "youtube" ? (
            //       <iframe
            //         src={`${video.src}?autoplay=1&mute=1`}
            //         title={video.title}
            //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //         allowFullScreen
            //         onMouseOut={() => setHoveredVideo(null)}
            //       />
            //     ) : (
            //       <video
            //         id={`video-${video.id}`}
            //         src={video.src}
            //         autoPlay
            //         muted
            //         onClick={() => handleVideoClick(video)}
            //       />
            //     )
            //   ) : (
            //     <img
            //       src={video.thumbnail}
            //       alt={video.title}
            //       onMouseOver={() => setHoveredVideo(video.id)}
            //     />
            //   )}
            //   <h4>{video.title}</h4>
            // </div>
          ))}
        </div>
      </div>

      {/* 🔹 PODCAST SECTION */}
      <div className="media-section">
        <h2>Podcasts</h2>
        <div className="podcast-row">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="media-card podcast-card" onClick={() => handlePodcastClick(podcast)}>
              <img src={podcast.thumbnail} alt={podcast.title} />
              <h4>{podcast.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTestimony;
// import React, { useState } from "react";
// import "./Style.css";
// import thumbnail from "./images/Image3_test.jpg";
// import thumbnail2 from "./images/Image4.jpg";
// import thumbnail3 from "./images/Image5.jpg";

// const videos = [
//   {
//     id: 1,
//     src: "https://www.youtube.com/embed/sQI40rux48c",
//     thumbnail: thumbnail2,
//     title: "Faith Feature - Jay Koshy",
//     type: "youtube"
//   },
//   {
//     id: 2,
//     src: "https://www.youtube.com/embed/sQI40rux48c",
//     thumbnail: thumbnail,
//     title: "Local Testimony",
//     type: "local"
//   },
//   {
//     id: 3,
//     src: require("../components/videos/video1.mp4"),
//     thumbnail: thumbnail,
//     title: "Local Testimony",
//     type: "local"
//   }
// ];

// const podcasts = [
//   {
//     id: 4,
//     src: "https://620bf9fa719102-98329246.castos.com/player/1637848",
//     thumbnail: thumbnail3,
//     title: "Campus Ministry ft.. Jay and Josh Koshy"
//   },
//   {
//     id: 5,
//     src: "https://620bf9fa719102-98329246.castos.com/player/1767696",
//     thumbnail: thumbnail3,
//     title: "Trusting in God ft. Grecia Vasquez & Ana Ruth Villareal Garcia"
//   }
// ];

// const VideoTestimony = () => {
//   const [hoveredVideo, setHoveredVideo] = useState(null);

//   const handleVideoClick = (video) => {
//     if (video.type === "local") {
//       const videoElement = document.getElementById(`video-${video.id}`);
//       videoElement.muted = false;
//       videoElement.play();
//     }
//   };

//   const handlePodcastClick = (podcast) => {
//     window.open(podcast.src, "_blank");
//   };

//   return (
//     <div className="container text-center media-container">
//       {/* 🔹 VIDEO SECTION */}
//       <div className="media-section">
//   <h2>Videos</h2>
//   <div className="media-row">
//     {videos.map((video) => (
//       <div key={video.id} className="media-card video-card">
//         {hoveredVideo === video.id ? (
//           video.type === "youtube" ? (
//             <iframe
//               src={`${video.src}?autoplay=1&mute=1`}
//               title={video.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               width="300"
//               height="200"
//               onMouseOut={() => setHoveredVideo(null)}
//             />
//           ) : (
//             <video
//               id={`video-${video.id}`}
//               src={video.src}
//               width="300"
//               height="200"
//               autoPlay
//               muted
//               onClick={() => handleVideoClick(video)}
//             />
//           )
//         ) : (
//           <img
//             src={video.thumbnail}
//             alt={video.title}
//             onMouseOver={() => setHoveredVideo(video.id)}
//           />
//         )}
//         <h4>{video.title}</h4>
//       </div>
//     ))}
//   </div>
// </div>

// <div className="media-section">
//   <h2>Podcasts</h2>
//   <div className="podcast-row">
//     {podcasts.map((podcast) => (
//       <div key={podcast.id} className="media-card podcast-card" onClick={() => handlePodcastClick(podcast)}>
//         <img src={podcast.thumbnail} alt={podcast.title} />
//         <h4>{podcast.title}</h4>
//       </div>
//     ))}
//   </div>
// </div>
// </div>
//   );
// };

// export default VideoTestimony;