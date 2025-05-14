import React from "react";
type SubmitProps = {
    title: string;
    type: "submit";
    href: string;
};

const Submit: React.FC <SubmitProps> =
({title, href}) => {
    return (
        <a href={href}>
        <button className="w-[320px] h-[58px] border rounded-xl bg-[#2C3E50] mt-6 cursor-pointer">
            <h1 className="font-bold text-amber-50">
            {title}
            </h1>
        </button>
        </a>
    )
}

export default Submit