import type { User } from "prisma/prisma-client"
import GetUsers from "../components/handleUsers/GetUsers"
import TopbarScroll from "../components/Topbar/Topbar_comp"
import prisma from "../core/prisma"
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"

export const getServerSideProps:GetServerSideProps = async({req}) =>{
  const session = await getSession({req})
  console.log(session);
  const users = await prisma.user.findMany()
  return {
    props: {
      users: JSON.parse(JSON.stringify(users))
    }
  }
}

export default function Home({users}:any) {
  return (
    <>
      <TopbarScroll />
      <GetUsers  users={users}/>
    </> 
  )
}
