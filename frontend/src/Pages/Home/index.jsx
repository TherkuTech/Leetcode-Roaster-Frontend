import React, { useState } from "react";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import toast, { Toaster } from 'react-hot-toast';

const Home = () =>{

    const [leetcodeUsername, setLeetcodeUsername] = useState(null);

    const [roast, setRoast] = useState(null);

    const [loader, setLoader] = useState(null);

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!leetcodeUsername){
            alert("Please enter a valid Leetcode username")
            return;
        }
        setLoader(true);
        try {
            const response = axios.post('');
            setLoader(false)
            setRoast(response.data.roast)
        } catch (error) {
            setLoader(false)
            toast("Faild to Roast 🙃, Try Once Again")
            console.log(error)
        }
    }

    return(
        <>
            <Toaster/>
            <div className="flex items-center justify-center h-screen bg-gray-100 p-[16px]">
                <div className="p-[32px] sm:max-w-[500px] w-full flex flex-col gap-[32px] shadow-md  rounded-xl bg-white">
                    <div className="flex flex-col md:gap-[8px] gap-[16px]">
                        <h1 className="text-3xl font-bold text-center">Leetcode Roaster 🍠</h1>
                        <p className="text-center text-xl font-medium text-gray-600">Roast your Leetcode profile </p>
                    </div>
                    <div>
                        <form className="" onSubmit={handleSubmit}>
                            <div>
                                <input onChange={(e)=> setLeetcodeUsername(e.target.value)} id="lc_username" type="text" placeholder="Enter Your Leetcode Username" className="w-full p-[16px] text-xl rounded-xl outline-0 border-2 border-gray-400 hover:border-blue-400 focus:border-blue-500"></input>
                            </div>
                            <button className="mt-[12px] p-[16px] rounded-xl w-full bg-blue-600 font-semibold text-lg text-white hover:bg-blue-500 duration-200 ease-in">{loader ? <Spinner/>  : "Roast"}</button>
                        </form>
                    </div>
                   {
                          
                            <div className="bg-gray-200 p-[16px]">
                                <h1 className="font-medium text-xl">Roast</h1>
                                 <p className="font-medium text-gray-600">{roast}</p>
                            </div>
                          
                   }
                   <div>
                        <p className="text-center text-lg font-medium text-gray-600">Made by <a href="https://github.com/TherkuTech/Leetcode-Roaster-Frontend" target="_blank" className="text-blue-600">Devoice</a></p>
                   </div>
                </div>
            </div>
        </>
    )
}


export default Home;