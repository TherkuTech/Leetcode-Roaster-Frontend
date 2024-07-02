import axios from "axios";
import Spinner from "../../Components/Spinner";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Home = () => {
  const [leetcodeUsername, setLeetcodeUsername] = useState("");
  const [roast, setRoast] = useState(null);
  const [loader, setLoader] = useState(false);
  const [leetData, setLeetData] = useState(null);

  const getLeetDetails = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}leets`,
        {
          username: leetcodeUsername,
        }
      );
      const userData = response.data.message.matchedUser;
      setLeetData(response.data.message.matchedUser);
      return userData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!leetcodeUsername) {
      toast.error("Please enter a valid Leetcode username");
      return;
    }
    setLoader(true);
    try {
      const userData = await getLeetDetails();
      console.log(userData);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}roast`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoader(false);
      console.log(response);
      setRoast(response.data.data);
    } catch (error) {
      setLoader(false);
      toast.error("Failed to Roast 🙃, Try Once Again");
      console.log(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center h-screen bg-gray-100 p-[16px]">
        <div className="p-[32px] sm:max-w-[500px] w-full flex flex-col gap-[32px] shadow-md rounded-xl bg-white">
          <div className="flex flex-col md:gap-[8px] gap-[16px]">
            <h1 className="text-3xl font-bold text-center">
              Leetcode Roaster 🍠
            </h1>
            <p className="text-center text-xl font-medium text-gray-600">
              Roast your Leetcode profile{" "}
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  onChange={(e) => setLeetcodeUsername(e.target.value)}
                  value={leetcodeUsername}
                  id="lc_username"
                  type="text"
                  placeholder="Enter Your Leetcode Username"
                  className="w-full p-[16px] text-xl rounded-xl outline-0 border-2 border-gray-400 hover:border-blue-400 focus:border-blue-500"
                />
              </div>
              <button
                className="mt-[12px] p-[16px] rounded-xl w-full bg-blue-600 font-semibold text-lg text-white hover:bg-blue-500 duration-200 ease-in"
                type="submit"
              >
                {loader ? <Spinner /> : "Roast"}
              </button>
            </form>
          </div>
          {roast && (
            <div className="bg-gray-200 p-[16px]">
              <h1 className="font-medium text-xl">Roast</h1>
              <p className="font-medium text-gray-600">{roast}</p>
            </div>
          )}
          <div>
            <p className="text-center text-lg font-medium text-gray-600">
              Made by{" "}
              <a
                href="https://github.com/TherkuTech/Leetcode-Roaster-Frontend"
                target="_blank"
                className="text-blue-600"
              >
                Devoice
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
