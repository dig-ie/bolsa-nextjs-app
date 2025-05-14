import React from "react";
import Link from "next/link";
type LinkProps = {
    a: string;
};

const CustomLink: React.FC <LinkProps> = ({a}) =>{ 
    return(
        <Link className="text-[#225991] font-bold text-[15px] mt-3 items-end justify-end ml-8" href="./ForgetPassword">
        {a}
        </Link>
    )
}

export default CustomLink