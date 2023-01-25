import {NextApiRequest, NextApiResponse} from 'next/types'
import prisma from '../../../core/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req:NextApiRequest, res: NextApiResponse){
    const session = await getSession({req})
    if(session){
        if(req.method == 'POST'){
            const {id, followId} = req.body
        await prisma.followers.create({data: {
            followId: session.user.id,
            userId: id
        }})
        }
        if(req.method === 'GET'){
            const userId = req.body.userId
            const user = await prisma.followers.findMany({where: {
                userId: userId
            }})
            const followers = await prisma.user.findMany({where: {
                id: user.followId
            }})
            res.json(followers)
        }
    }else {
        res.status(403).json({msg: 'Unauthorized'})
    }
    
}