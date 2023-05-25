import Link from "next/link";

export default function LoginButton(){
    return (
        <div className="flex items-center gap-2 flex-col lg:flex-row w-full p-5">
          <Link href="/auth/login" className="bg-orange-500 text-center text-white font-bold lg:font-medium lg:bg-orange-500 lg:text-white w-full py-3 lg:py-2 px-5 rounded">
            Login
          </Link>
          <Link href="/register" className="bg-orange-500 text-center text-white font-bold lg:font-medium lg:bg-blue-800 lg:text-white w-full py-3 lg:py-2 px-5 rounded">
            Register
          </Link>
        </div>
      );
}