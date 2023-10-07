import Profile from "@/components/profile";
import Repostries from "@/components/repostries";
import Link from "next/link";
import React, { useState } from "react";

const index = () => {
  return (
    <center>
      <h1>Enter your github UserName.</h1>
      <form action="/about">
        <input name="username" placeholder="Enter github username." />
        <br/>
        <button type="submit">View Profile</button>
      </form>
    </center>
  );
};

export default index;

// https://api.github.com/users/pratikdeshmukh2004/repos