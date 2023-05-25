'use client'

import { getSession } from '../../utils/hasSession'
import LoginButton from './login-btn';
import Profile from './profile';

export default function AuthButton({ session }: { session: any}) {

    const renderButton = () => {
        if (session) {
            return <Profile user={session.user} />;
          } else {
            return <LoginButton />;
          }
    }

    return (
        <>
            {renderButton()}
        </>
    )

};