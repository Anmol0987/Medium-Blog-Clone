import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@anmolmittal-npm/medium-blog-comman";
import  axios  from "axios";
import { BACKEND_URL } from "../configure";


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SignupInput>({
        username: "",
        password: "",
        name: "",
    });

    async function sendRequest() {
        try {
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs") ;
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col  ">

            <div className=" flex justify-center  ">
                <div >
                    <div>
                        <div className=" text-4xl font-bold">
                            {type === "signup" ? "Create an account" : "Login to your account"}
                        </div>
                        <div className="font-light text-slate-500">

                            {type === "signup" ? "Alredy have an account?" : "Don't have an account?"}
                            <Link to={type === "signup" ? "/signin" : "/signup"} className="ml-2 underline ">
                                {type === "signup" ? "Login" : "Register"}</Link>
                        </div>
                    </div>
                    <div className="mt-2 ">
                        {type === "signup" ? <InputLable lable="name" placeholde="Enter Your name" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                name: e.target.value,
                            })
                            );
                        }}
                        /> : null}
                        <InputLable lable="Username" placeholde="Enter Your Username" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                username: e.target.value,
                            })
                            );
                        }}
                        />
                        <InputLable lable="password" placeholde="" type={"password"} onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                password: e.target.value,
                            })
                            );
                        }}
                        />

                        <button onClick={sendRequest} type="button" className=" mt-8 w-full text-white bg-gray-800  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                            {type === "signup" ? "signup" : "signin"}</button>
                    </div>
                </div>
            </div>




        </div>

    )

}
interface InputProps {
    lable: string;
    placeholde: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputLable({ lable, placeholde, onChange, type }: InputProps) {
    return (
        <div>
            <div>
                <label className="block mb-2 text-sm font-bold text-gray-900 pt-4 ">{lable}</label>
                <input type={type || "text"} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholde} required />
            </div>

        </div>
    );
}