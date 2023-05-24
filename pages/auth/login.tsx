import "./style.css";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logo from "@/components/logo";
import Icon from "@/components/icon";

export default function SignIn({
  csrfToken, error
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="fixed top-0 w-[100%] h-[100%] flex items-center justify-center bg-blue-800">
      {/* <div className="cloud fixed top-0 left-0 w-[100%] h-[100%] -z-10 transform translate-y-20 opacity-100"></div> */}
      {/* <div className="wayang bg-no-repeat fixed top-0 left-0 w-[100%] h-[100%] -z-10 scale-105"></div> */}
      <div className="bg-white shadow-md p-10 rounded-md w-[500px] grid gap-5">
        <div className="w-full flex justify-center">
          <Logo width={100} height={50} />
        </div>
        {error && <div className="text-red-500 text-left bg-red-200 p-3">Email atau password tidak valid</div>}
        <div>
          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div className="grid gap-2 mb-3">
              <label  className="text-neutral-500">Email</label>
              <div className="flex border">
                <div className="flex items-center justify-center p-2 px-3 bg-slate-200">
                  <Icon name="user" size="20" color="#00000070" />
                </div>

                <input
                  name="email"
                  type="text"
                  className="p-2 px-4 w-full outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="grid gap-2 mb-3">
              <label className="text-neutral-500">Password</label>
              <div className="flex border">
                <div className="flex items-center justify-center p-2 px-3 bg-slate-200">
                  <Icon name="lock" size="20" color="#00000070" />
                </div>

                <input
                  name="password"
                  type="password"
                  className="p-2 px-4 w-full outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="w-full text-end">
              <div className="text-neutral-500">Forgot Password ?</div>
              <button
                type="submit"
                className="mt-5 w-full bg-orange-500 p-3 px-5 rounded text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // get query params
  const { error } = context.query;

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
      error : error || null
    },
  };
}
