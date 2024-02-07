"use client";

import { FormEventHandler, useState } from "react";

function TILForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/til`;
    const options = {
      method: "POST",
      body: JSON.stringify({ title, content }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    console.log("Data", data);
  };

  return (
    <div className=" mt-11">
      <h1 className="text-center text-[35px] mb-11 ">오늘의 TIL</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-[60%] mx-auto ">
        <label htmlFor="title">제목</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border h-10 mb-6 rounded-[7px] shadow-lg shadow-indigo-500/10 "
        />
        <label htmlFor="content">내용</label>
        <textarea
          rows={17}
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border shadow-lg shadow-indigo-500/10 rounded-[7px]"
        />
        <div className="flex justify-end">
          <button type="submit" className="w-[60px] mt-3  mr-0">
            작성하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default TILForm;
