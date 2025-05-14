import React from "react";
type ButtonProps = {
    title: string;
    href: string;

};

const Button: React.FC <ButtonProps> = ({title, href, }) => {
    return (
        <a href={href}>
        <button className="w-[154px] h-[58px] border rounded-xl bg-[#F5F6FA] hover:bg-gray-200 cursor-pointer">
                <h1 className="font-bold text-xl">
                    {title}
                </h1>
        </button>
        </a>
    )
}

export default Button