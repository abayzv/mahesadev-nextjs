"use client";
import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react"

const Dropdown = ({user} : {user : any}) => {
    const {name} = user

    return (
        <div className="absolute top-[100%] left-[50%] transform translate-x-[-50%] mt-5 p-2 w-[200px] bg-white z-10 rounded shadow-md">
            <div className="text-center">
                <div>Wellcome <span className="text-blue-800 font-bold">{name}</span></div>
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
    <div ref={dropdown} className="flex items-center gap-2 relative">
      <div onClick={()=>{setShowDropdown(!showDropdown)}} className="rounded-full cursor-pointer overflow-clip">
        <img
          src={image}
          className="w-10 h-10"
        />
      </div>
      {showDropdown && <Dropdown user={user}/>}
    </div>
  );
}
