"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "./icon";
import AuthButton from "./auth-btn";

export default function Menu({
  type = "standard",
  session,
}: {
  type: string;
  session?: any;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef(null);

  // set active menu by path
  const pathName = usePathname();

  const menu = useMemo(
    () => [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Article",
        link: "/article",
      },
    ],
    []
  );

  useEffect(() => {
    const index = menu.findIndex((item) => item.link === pathName);
    setActiveIndex(index);

    // close mobile menu when click outside
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMobileMenu(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [menu, pathName]);

  return (
    <>
      {type === "standard" ? (
        <ul>
          {menu.map((item, index) => (
            <Link href={item.link} key={index}>
              <li
                key={index}
                className={`inline-block mx-3 uppercase text-md font-semibold ${
                  activeIndex === index ? "text-orange-600" : "text-blue-800"
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <div ref={menuRef}>
          <div>
            <button
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
              className="p-3 rounded border border-neutral-400"
            >
              <Icon name="menu" size="20" color="#00000070" />
            </button>
          </div>
          <div
            className={`fixed top-0 left-0 bg-blue-800 z-50 text-white w-3/4 h-[100%] shadow-md ${
              showMobileMenu ? "slide-in-left" : "slide-out-left"
            }`}
          >
            <AuthButton session={session} />
            <ul>
              {menu.map((item, index) => (
                <Link href={item.link} key={index}>
                  <li
                    key={index}
                    className={`uppercase text-md font-semibold px-7 py-7 ${
                      activeIndex === index
                        ? "text-white bg-blue-700"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
