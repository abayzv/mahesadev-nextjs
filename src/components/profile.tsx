"use client";
import { useState } from "react";
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

  return (
    <div className="flex items-center gap-2 relative">
      <div onClick={()=>{setShowDropdown(!showDropdown)}} className="rounded-full cursor-pointer overflow-clip border-2 border-blue-800">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          className="w-10 h-10"
        />
      </div>
      {showDropdown && <Dropdown user={user}/>}
    </div>
  );
}
