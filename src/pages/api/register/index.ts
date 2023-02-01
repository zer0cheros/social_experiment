import {NextApiRequest, NextApiResponse} from 'next/types'
import prisma from '../../../core/prisma'
import {hashSync} from 'bcrypt'

export default async function handler(req:NextApiRequest, res: NextApiResponse){
    if(req.method == 'POST'){
        console.log(req.body);
        
        const {name, email, password} = req.body
        const salt = 10
        const hasedPassword = hashSync(password, salt)
        await prisma.user.create({data:{
            name: name,
            email: email,
            password: hasedPassword
        }}) 
        res.redirect('/login')
    }
}