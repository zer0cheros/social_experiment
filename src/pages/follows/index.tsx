import FollowBox from "../../components/FollowBox";
import prisma from "../../core/prisma";

export default function Home() {
  return (
      <div className="w-full min-w-600 h-screen flex justify-center items-center bg-EerieBlack">
      <div className='w-1/3 h-screen flex-col flex justify-center items-center '>
      <FollowBox />
      <FollowBox />
      <FollowBox />
      <FollowBox />
      </div>
      </div>
  )
}


