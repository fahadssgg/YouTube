import React from "react";
import { Link } from "react-router-dom";
import menu from "../assets/sort.png";
import voice from "../assets/voice.png";
import search from "../assets/search.png";
import notification from "../assets/notification.png";
import user from "../assets/profile-user.png";
import video from "../assets/video.png";
export default function Navpar() {
  const [login, setLogin] = React.useState(true);

  React.useEffect(() => {
    setLogin(false);
  }, [login]);

  return (
    // <div className="flex justify-between w-full p-5 bg-cyan-500">
    //   <Link to={"/"}>
    //     <h1 className="font-bold">logo</h1>
    //   </Link>
    //   {login == false ? (
    //     <>
    //       <Link to={"/Login"}>LogIn</Link>

    //       <Link to={""}>SingUp</Link>
    //     </>
    //   ) : (
    //     <div className="flex gap-5">
    //       <Link to={"/Login"}>logout</Link>
    //     </div>
    //   )}
    // </div>

    <div className="flex justify-between items-center w-full h-[56px] p-5 bg-[rgb(15,15,15)]">
      <div className="flex gap-5 items-center">
        <button className=" p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-full">
          <img className="h-5" src={menu} />
        </button>
        <Link to={"/"}>
          <img
            className="h-5"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-white-png.png"
          />
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex items-center">
          {" "}
          <input
            className="w-[558px] h-[40px]  border border-[rgb(46,46,46)] rounded-s-full pl-3 bg-[rgb(18,18,18)] "
            type="text"
            placeholder="Search"
            ة
          />
          <button className=" h-[40px] bg-[rgb(34,34,34)]  border border-[rgb(46,46,46)]  rounded-e-full ">
            <img className=" h-[25px] object-fill px-3 " src={search} />
          </button>
        </div>
        <button className=" p-2 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.19)] rounded-full">
          {" "}
          <img className="h-[20px]  " src={voice} />
        </button>
      </div>
      <div className="flex items-center gap-5 mr-4">
        <button className=" p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-full">
          <img className="h-[20px]  " src={video} alt="" srcset="" />
        </button>
        <button className=" p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-full">
          <img className="h-[20px]  " src={notification} alt="" srcset="" />
        </button>
        <button className=" p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-full">
          <img className="h-[25px]  " src={user} alt="" srcset="" />
        </button>
      </div>
    </div>
  );
}
