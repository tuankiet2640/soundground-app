import RecentlyPlayed from "../../components/HomePage/RecentlyPlayed";

export default function Home() {
  return (
    <>
<div className="home-container grid grid-cols-12 gap-4 h-screen">
        <div className="left-space col-span-1 bg-slate-300	">
        </div>
        
        <div className="home-song-items col-span-7 border-r border-gray-300 ">
          <RecentlyPlayed/>
        </div>
        <div className="personal-recommendation col-span-3">
          personal stuff here I think
        </div>

        <div className="right-space col-span-1 bg-slate-300	">
        </div>
      </div>
    </>
  );
}