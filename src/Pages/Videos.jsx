import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Videos() {
  // localStorage.setItem("true", true);
  const [videos, setVideos] = React.useState([]);
  const [VidoId, setVidoId] = React.useState(null);
  const categories = [
    "All",
    "Games",
    "Anime",
    "Movie",
    "Music",
    "Live",
    "New",
    "Old",
    "Fahad",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
  };
  React.useEffect(() => {
    const fetchVideos = () => {
      const apiKey = "AIzaSyBn-S0DZ21U2bGJlI6oqoXLwWP-AGs_ZCM";

      const searchQuery = "videos/programmer";
      // const searchQuery = "programmer";
      const apiUrl = "https://www.googleapis.com/youtube/v3/search";

      // Set up query parameters
      const params = {
        part: "snippet",
        q: searchQuery,
        key: apiKey,
        maxResults: 2,
      };

      const url = `${apiUrl}?${new URLSearchParams(params)}`;
      console.log(url);

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.items);

          setVideos(data.items);
        })
        .catch((error) => {
          console.error("Error fetching data from YouTube API:", error);
        });
    };

    // Fetch initial set of videos
    fetchVideos();
  }, []);

  const handleVideoHover = (videoId) => {
    setVidoId(videoId);
  };
  return (
    <>
      {/* <div>Wellcom</div>

      <a href="/ViewPage">Go to ViewPage</a>
      <hr /> */}

      <div className=" pt-5 px-6 items-center">
        <Slider className="py-10  " {...settings}>
          {categories.map((category, index) => (
            <div key={index}>
              <p className="bg-[rgb(39,39,39)] py-1 px-1 mx-1 rounded-md hover:bg-[rgb(70,70,70)] text-center text-white">
                {category}
              </p>
            </div>
          ))}
        </Slider>
        <div className="grid grid-cols-1 gap-4">
          {videos.map((video) => (
            <Link className=" w-fit" to={`/ViewPage/${video.id.videoId}`}>
              <div
                key={video.id.videoId}
                onMouseEnter={() => handleVideoHover(video.id.videoId)}
                onMouseLeave={() => setVidoId(null)}
                className="flex  w-[422px]  text-white "
              >
                {" "}
                <img
                  className="  h-[94px] w-[168px] text-sm  object-cover rounded-xl "
                  src={video.snippet.thumbnails.medium.url}
                />
                <div className=" pl-2 h-[94px]  ">
                  <div>
                    <p className="text-sm">{video.snippet.title}</p>
                    <p className="text-[rgb(147,147,147)] text-sm hover:text-white hover:transition-all">
                      {video.snippet.channelTitle}
                    </p>

                    <p className="text-[rgb(147,147,147)] text-xs">
                      46k view . 10 hours ago
                    </p>
                    <p className="text-[rgb(147,147,147)] text-sm bg-[rgb(39,39,39)] w-fit px-1 rounded-md">
                      New
                    </p>
                  </div>
                </div>
                {/* {VidoId && (
                <iframe
                  title="YouTube Video"
                  width="480"
                  height="360"
                  src={`https://www.youtube.com/embed/${VidoId}?autoplay=1`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )} */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
