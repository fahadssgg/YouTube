import React from "react";
import { useParams } from "react-router-dom";
// import Booksinfo from "./Data";
import Videos from "./Videos";
export default function ViewPage() {
  const { id } = useParams();
  const [Video, setVideo] = React.useState([]);
  React.useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyBn-S0DZ21U2bGJlI6oqoXLwWP-AGs_ZCM`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setVideo([data.items[0]]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from YouTube API:", error);
      });
  }, [<Videos />]);

  return (
    <>
      {/* <div className="flex gap-10">
        {Booksinfo.map((book, i) => {
          return (
            <div className="bg-stone-300" key={i}>
              <h1>{book.title}</h1>
              <a className="border" href={`/ViewPage/${book.id}`}>
                More info
              </a>
            </div>
          );
        })}
      </div> */}
      <div className="grid grid-cols-3 gap-9 px-16 pt-10  bg-[rgb(15,15,15)]">
        <div className="col-span-2 flex flex-col justify-between h-screen    text-white">
          {Video.map((item) => (
            <div className="flex flex-col justify-center items-start  w-[932px]">
              <iframe
                className="rounded-2xl"
                title="YouTube Video"
                width="932"
                height="524"
                src={`https://www.youtube.com/embed/${item.id}?autoplay=1`}
                allowFullScreen
              ></iframe>
              <h1 className="font-bold my-3">{item.snippet.title}</h1>
            </div>
          ))}
        </div>
        <div>
          <Videos />
        </div>
      </div>
    </>
  );
}
