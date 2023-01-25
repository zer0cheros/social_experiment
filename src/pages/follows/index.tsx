import FollowBox from "../../components/FollowBox";

export default function Home() {
  return (
    <>
      <h1 className='text-bold text-xl'>Social experiment with tailwind and framer motion</h1>
      <div className="w-full min-w-600 h-screen flex justify-center items-center bg-EerieBlack">
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
