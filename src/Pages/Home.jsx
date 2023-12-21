import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // localStorage.setItem("true", true);
  const [videos, setVideos] = React.useState([]);
  const [VidoId, setVidoId] = React.useState(null);
  React.useEffect(() => {
    const fetchVideos = () => {
      const apiKey = "AIzaSyBn-S0DZ21U2bGJlI6oqoXLwWP-AGs_ZCM";

      const searchQuery = "videos/leageoflegend";
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
      <div className=" text-white  ">
        <ul className="flex bg-[rgb(15,15,15)] py-2 justify-around">
          <li className=" bg-[rgb(39,39,39)] py-1 px-3 rounded-md hover:bg-[rgb(70,70,70)] ">
            All
          </li>
          <li className=" bg-[rgb(39,39,39)] py-1 px-3 rounded-md hover:bg-[rgb(70,70,70)] ">
            Games
          </li>
          <li className=" bg-[rgb(39,39,39)] py-1 px-3 rounded-md hover:bg-[rgb(70,70,70)] ">
            Anime
          </li>
          <li className=" bg-[rgb(39,39,39)] py-1 px-3 rounded-md hover:bg-[rgb(70,70,70)] ">
            Movie
          </li>
          <li className=" bg-[rgb(39,39,39)] py-1 px-3 rounded-md hover:bg-[rgb(70,70,70)] ">
            Music
          </li>
          <li className=" bg-[rgb(39,39,39)] py-1 px-3 rounded-md hover:bg-[rgb(70,70,70)] ">
            Live
          </li>
          <li className=" bg-[rgb(39,39,39)] py-1 px-3 rounded-md hover:bg-[rgb(70,70,70)] ">
            New
          </li>
          <li className=" bg-[rgb(39,39,39)] py-1 px-3 rounded-md hover:bg-[rgb(70,70,70)] ">
            Old
          </li>
          <li className=" bg-[rgb(39,39,39)] py-1 px-3 rounded-md hover:bg-[rgb(70,70,70)] ">
            Fahad
          </li>
        </ul>
      </div>
      <div className="bg-[rgb(15,15,15)] h-screen pt-5 px-5">
        <div className="grid grid-cols-3 max-sm:grid-cols-1">
          {videos.map((video) => (
            <Link className=" w-fit" to={`/ViewPage/${video.id.videoId}`}>
              <div
                key={video.id.videoId}
                onMouseEnter={() => handleVideoHover(video.id.videoId)}
                onMouseLeave={() => setVidoId(null)}
                className="flex flex-col w-[422px]  text-white"
              >
                {" "}
                <img
                  className=" h-[237px]  object-cover rounded-xl hover:rounded-none hover:transition-all"
                  src={video.snippet.thumbnails.high.url}
                />
                <div className="flex p-2 gap-2 pt-3">
                  <img
                    className="bg-white/40 w-[36px] h-[36px] rounded-full "
                    src={video.snippet.thumbnails.high.url}
                  />
                  <div>
                    <p>{video.snippet.title}</p>
                    <p className="text-[rgb(147,147,147)] hover:text-white hover:transition-all">
                      {video.snippet.channelTitle}
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
