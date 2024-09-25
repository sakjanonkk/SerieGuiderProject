import React, { FC } from 'react'
import { Button } from './ui/button'
import { ReactNode } from 'react'
import { FaGoogle } from "react-icons/fa";

interface GoogleSignInButtonProps {
    children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({children}) => {
    const loginWithGoogle = () => console.log('login with google')
  return (
   <Button onClick={loginWithGoogle}className="w-full ">
    <FaGoogle className=' mr-2'/>{children}</Button>
  )
}

export default GoogleSignInButton
