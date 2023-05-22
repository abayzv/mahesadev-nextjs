import type { NextApiRequest, NextApiResponse } from 'next'
import { createUserByEmail } from '../../../services/userServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'POST'){
        try{
            const {email, password} = req.body
            if(!email || !password) return res.status(400).json({message: 'You must provide an email and a password.'})

            const user = await createUserByEmail(email, password)

            return res.status(200).json({
                message: 'User registered successfully.',
                data : user
            })
        }
        catch(err){
            return res.status(500).json({message: 'An error occured while registering.'})
        }
    }

}