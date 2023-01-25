import FollowBox from "../../components/FollowBox";
import Topbar_comp from "../../components/Topbar/Topbar_comp";

export default function Home() {
  return (
    <>
      <Topbar_comp />
      <div className="w-full min-w-600 h-screen flex justify-center items-center bg-Gunmetal">
      <div className='w-1/3 h-screen flex-col flex justify-center items-center '>
      <FollowBox />
      <FollowBox />
      <FollowBox />
      <FollowBox />

      </div>
      </div>
    </>
  )
}
