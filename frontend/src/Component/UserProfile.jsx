import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { fetcher } from "../utlis/dataFetch";
import Cookie from "js-cookie";
import { Link } from "react-router-dom";
function UserProfile() {
  const [userProileData, setUserProfileData] = useState(null);

  async function getUserData() {
    const {
      data: { data },
    } = await axios.get(
      "https://tkhcapstonegroup4-production.up.railway.app/v1/auth/",
      {
        headers: {
          Authorization: `Bearer ${Cookie.get("token")}`,
        },
      }
    );
    if (data) {
      setUserProfileData(data);
      console.log(data);
    }
  }
  useEffect(() => {
    getUserData();
    console.log(userProileData);
  }, []);

  return (
    <div className=" bg-primary w-96 h-full">
      <div className="flex flex-col gap-10 w-full">
        <div className="h-64 w-64 bg-green-200 rounded-full overflow-hidden mx-auto py-10">
          <img src="" alt="profile-pic" />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <span>
            Name: {userProileData?.firstName} {userProileData?.lastName}
          </span>
          <span>Email: {userProileData?.email}</span>
          <span>Phone Number: {userProileData?.number}</span>
        </div>
      </div>
      <div>
        <span className="ml-10">Favorite store</span>
        <div className="flex gap-2">
          <div class="max-w-sm rounded overflow-hidden shadow-lg  ">
            <div className="bg-gray-500 h-36 w-full "></div>
            <span>store name</span>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg  ">
            <div className="bg-gray-500 h-36 w-full "></div>
            <span>store name</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
