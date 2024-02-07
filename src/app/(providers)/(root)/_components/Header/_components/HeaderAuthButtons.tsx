"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import Link from "next/link";
import { useEffect, useState } from "react";

function HeaderAuthButtons() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <div className="flex gap-x-4 items-center">
      {isLoggedIn ? (
        <div className="flex gap-6">
          <Link href="/my-page">마이페이지</Link>
          <Link href="/" onClick={() => setIsLoggedIn(false)}>
            로그아웃
          </Link>
        </div>
      ) : (
        <div className="flex gap-6">
          <Link href="/sign-up">회원가입하기</Link>
          <Link href="/log-in">로그인하기</Link>
        </div>
      )}
    </div>
  );
}

export default HeaderAuthButtons;
