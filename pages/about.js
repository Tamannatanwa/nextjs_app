import Profile from "@/components/profile";
import Repostries from "@/components/repostries";
import React from "react";

const about = () => {
  return (
    <>
      <div style={{display:"flex",justifyContent:'space-around'}}>
        <div>
          <Profile />
        </div>
        <div>
          <Repostries />
        </div>
      </div>
    </>
  );
};

export default about;
