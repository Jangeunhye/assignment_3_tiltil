"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignUpForm() {
  const router = useRouter();
  const auth = useAuth();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const options = { method: "POST", body: JSON.stringify({ id, pw }) };

    const url = `${window.location.origin}/api/auth/sign-up`;
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.setIsLoggedIn(true);
    } else {
      alert("회원가입 실패");
    }
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] mx-auto mt-10 "
      >
        <label htmlFor="id">아이디</label>
        <input
          name="id"
          id="id"
          type="text"
          value={id}
          className="border mb-8 h-11 shadow-lg shadow-indigo-500/40 bg-[#e9eaf5] rounded-[10px]"
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="pw">비밀번호</label>
        <input
          name="pw"
          id="pw"
          type="password"
          className="border h-11 shadow-lg shadow-indigo-500/40 bg-[#e9eaf5] rounded-[10px]"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <div className="mt-3 flex justify-center">
          <button className="w-24 m-7" type="submit">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
