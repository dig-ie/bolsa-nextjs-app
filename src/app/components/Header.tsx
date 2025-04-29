import React from 'react';
import Image from 'next/image';

type HeaderProps = {
    title?: string;
    buttonText?: string;
};

const Header: React.FC<HeaderProps> = ({
    title = "Valorim",
    buttonText = "Entrar",
}) => {
    return (
        <header>
            <nav className="flex items-center justify-between w-full h-16 px-4 bg-white text-primaryGreen">
                <div className="flex items-center gap-4">
                    <Image
                        alt="valorim-icone"
                        src="/images/valorim logo.png"
                        width={37}
                        height={37}
                    />
                    <span className="font-bold text-[24px]">{title}</span>
                </div>
                <button className="px-2 py-1 font-bold text-black border-primaryGreen border-3 w-26 rounded-xl text-md">
                    {buttonText}
                </button>
            </nav>
        </header>
    );
};

export default Header;
