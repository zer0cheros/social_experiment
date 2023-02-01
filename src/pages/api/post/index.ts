import {NextApiRequest, NextApiResponse} from 'next/types'
import prisma from '../../../core/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req:NextApiRequest, res: NextApiResponse){
    const session = await getSession({req})
    const {title, content} = req.body
    if(session){
        if(req.method == 'POST'){
            await prisma.post.create({
                data: {
                    title: title,
                    content: content,
                    authorId: session.user.id
                }
            })
            res.status(200).json({msg: 'created'})
        }
    }else {
        res.status(401).json({msg: 'Unauthorized'})
    }
}