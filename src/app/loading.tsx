import Logo from "@/components/logo";

export default function Loading() {
    return(
        <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-white z-[999] flex items-center justify-center">
            <div className="text-center grid gap-4">
                <div className="animate-bounce">
                    <Logo width={150} height={150}/>
                </div>
                <div className="animate-pulse text-lg font-medium">Silahkan Tunggu...</div>
            </div>
        </div>
    )
  }