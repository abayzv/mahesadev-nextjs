"use client";
import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react"

const Dropdown = ({user} : {user : any}) => {
    const {name} = user

    return (
        <div className="fade-in w-full p-5 lg:absolute lg:top-[100%] lg:left-[50%] lg:transform lg:translate-x-[-50%] lg:mt-5 lg:p-2 lg:w-[200px] bg-white lg:z-10 rounded lg:shadow-md">
            <div className="text-center">
                <div className="text-neutral-700">Wellcome <span className="text-blue-800 font-bold">{name}</span></div>
            </div>
            <div>
                <button className="w-full p-2 bg-orange-500 mt-2 text-white rounded">Profile</button>
                <button onClick={()=>{signOut()}} className="w-full p-2 bg-blue-800 mt-2 text-white rounded">Logout</button>
            </div>
        </div>
    )
}

export default function Profile({ user }: { user: any }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const {image} = user
  const dropdown = useRef(null)

  useEffect(() => {
    if(!showDropdown) return
    const handleClickOutside = (event : any) => {
      // @ts-ignore
      if(dropdown.current && !dropdown.current.contains(event.target)){
        setShowDropdown(false)
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)

  }, [showDropdown])

  return (
    <div ref={dropdown} className="flex flex-col lg:flex-row items-center gap-3 lg:gap-2 relative justify-center lg:justify-normal p-5">
      <div onClick={()=>{setShowDropdown(!showDropdown)}} className="rounded-full border-white border-4 lg:bg-2 lg:border-blue-800 cursor-pointer overflow-clip">
        <img
          src={image ? image : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'}
          className="lg:w-10 lg:h-10 w-20 h-20"
        />
      </div>
      {showDropdown && <Dropdown user={user}/>}
    </div>
  );
}
