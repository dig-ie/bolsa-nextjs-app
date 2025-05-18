import React from "react";
import {FormProps} from "../Form/FormProps"

const Form: React.FC <FormProps> = ({label, placeholder}) => {
    return (
        <form className="w-full">
                <label className="text-2xl font-medium mb-1 px-8 py-10 ">{label}</label>
                <input type="text " placeholder={placeholder} className="px-5 py-2 rounded-2xl  border border-textClaro bg-backgroundClaro text-sm mt-3  ml-8 w-[320px]"/>
        </form>
    )
}

export default Form