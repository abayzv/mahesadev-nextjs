import Link from "next/link";

export default function LoginButton(){
    return (
        <div className="flex items-center gap-2">
          <Link href="/auth/login" className="bg-orange-500 text-white p-2 px-5 rounded">
            Login
          </Link>
          <button className="bg-blue-800 text-white p-2 px-5 rounded">
            Register
          </button>
        </div>
      );
}