import {NextApiRequest, NextApiResponse} from 'next/types'
import prisma from '../../../core/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req:NextApiRequest, res: NextApiResponse){
    const session = await getSession({req})
    if(session){
        if(req.method == 'POST'){
            const {id} = req.body
            console.log(id)
        await prisma.followers.create({data: {
            followId: session.user.email,
            userId: id
        }})
        console.log('created');
        
        }
        if(req.method === 'GET'){
            //const userId = req.body.userId
            const user = await prisma.user.findUnique({where: {
                email: session.user.email
            }})
            const followers = await prisma.followers.findMany({where: {
                followId: user.email
            }})
            res.json(followers)
        }
    }else {
        res.status(403).json({msg: 'Unauthorized'})
    }
    
}