import React from "react";
import Link from "next/link";
import {CustomLinkProps} from "../CustomLink/CustomLinkProps"

const CustomLink: React.FC <CustomLinkProps> = ({a}) =>{ 
    return(
        <Link className="text-customBlue font-bold text-[15px] mt-3 items-end justify-end ml-8" href="./ForgetPassword">
        {a}
        </Link>
    )
}

export default CustomLink