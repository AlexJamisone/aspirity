import Image from "next/image";

export default function Avatar() {
    return (
        <div className="cursor-pointer relative">
            <Image src='/avatar.png' width={160} height={160} alt="avatar" className="" />
            <div className="flex items-center opacity-0 transition rounded-full hover:opacity-100 bg-black/50 absolute size-full top-0 justify-center">
               <Image src='/camera.svg' priority width={24} height={24} alt="camera"/> 
            </div>
        </div>
    )
}
