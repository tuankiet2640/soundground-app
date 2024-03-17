import Song from "../../components/common/Song";
import RecentlyPlayed from "../../components/HomePage/RecentlyPlayed";
export default function Home() {
    return (
      <>
<div className="home-container ">
  <div className="left-space">
    {/* first blank space  */}
    space 1
  </div>
  <div className="home-song-items">
    <RecentlyPlayed/>
  </div>
  <div className="personal-recommendation">
    //personal recommendations
  </div>
  <div className="right-space">
    {/* last space */}
    space2
  </div>
</div>    
</>
);
}
