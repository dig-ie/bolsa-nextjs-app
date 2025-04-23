import Image from "next/image"
export default function Header() {
    return (
        <header className="">
            <nav className="flex items-center justify-between w-full h-16 px-4 bg-white text-primaryGreen">
                <div className="flex items-center gap-4">
                    <Image alt="valorim-icone" src="/images/valorim logo.png" width={37} height={37} />
                    <span className="font-semibold  text-[24px]">Valorim</span>
                </div>
                <button className="px-2 py-1 font-bold text-black border-primaryGreen border-3 w-26 black rounded-xl text-md">Entrar</button>
            </nav>
        </header>
    )
}