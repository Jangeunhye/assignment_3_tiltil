"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { FormEventHandler, useState } from "react";

function LogInForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/auth/log-in`;
    const options = { method: "POST", body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.setIsLoggedIn(true);
    } else {
      alert("로그인 실패~");
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col w-[500px] mx-auto mt-10"
    >
      <label htmlFor="id">아이디</label>
      <input
        name="id"
        id="id"
        type="text"
        value={id}
        className="border mb-8   h-11 shadow-lg shadow-indigo-500/40 bg-[#e9eaf5] rounded-[10px]"
        onChange={(e) => setId(e.target.value)}
      />
      <label htmlFor="pw">비밀번호</label>
      <input
        name="pw"
        id="pw"
        type="password"
        className="border   h-11 shadow-lg shadow-indigo-500/40 bg-[#e9eaf5] rounded-[10px]"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
      <div className="mt-3 flex justify-center">
        <button className="mt-7 w-24" type="submit">
          로그인
        </button>
      </div>
    </form>
  );
}

export default LogInForm;
