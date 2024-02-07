"use client";

import { updateNickName } from "@/app/(providers)/_redux/reducers/user.reducers";
import { RootState } from "@/app/(providers)/_redux/types";
import { FormEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function UpdateInfoForm() {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.user);
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    setNickName(profile.nickName);
  }, [profile]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(updateNickName(nickName));
    console.log(profile.nickName);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center ">
      <label htmlFor="nickName" className="text-[25px] mb-5">
        닉네임
      </label>
      <div>
        <input
          id="nickName"
          name="nickName"
          className="w-96 h-10 border pl-2   h-11 shadow-lg shadow-indigo-500/40 bg-[#e9eaf5] rounded-[10px]"
          type="text"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <button className="ml-5">완료</button>
      </div>
    </form>
  );
}
export default UpdateInfoForm;
