import type { NextApiRequest, NextApiResponse } from 'next'
import { createUserByEmail, findUserByEmail } from '../../../services/userServices'
import type { User, Passenger } from '../../../services/userServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'POST'){
        try{
            const userdata = req.body.userdata
            const passenger = req.body.passenger
            const {email, password} = userdata

            if(!email || !password) return res.status(400).json({message: 'You must provide an email and a password.'})

            const userExists = await findUserByEmail(email)

            if(userExists) return res.status(400).json({message: 'Email already registered.'})

            const user = await createUserByEmail({userdata, passenger})

            return res.status(200).json({
                message: 'User registered successfully.',
                data : user
            })
        }
        catch(err){
            return res.status(500).json({message: 'An error occured while registering.'})
        }
    } else {
        return res.status(405).json({message: 'Method not allowed.'})
    }

}