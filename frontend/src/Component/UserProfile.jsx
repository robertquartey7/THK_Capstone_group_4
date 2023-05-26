import React from "react";



function UserProfile() {


  return (
    <div className="border h-full flex flex-col bg-primary py-10">
      <div className="flex flex-col gap-10 mx-auto">
        <div className="h-64 w-64 bg-green-200 rounded-full overflow-hidden">
          <img src="" alt="profile-pic" />
        </div>
        <h1 className="text-center text-lg">name</h1>
        <p className="text-center">address</p>
      </div>
      <div>
        <span>fav store</span>
        <div>stores</div>
      </div>
    </div>
  );
}

export default UserProfile;
