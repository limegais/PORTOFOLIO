import React, { useState, useEffect } from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const [year, setYear] = useState<number | string>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-4 border-t border-border px-4 py-6 md:px-6">
      {/* Top row: copyright + social */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
          {`© ${year} ${config.author}. All rights reserved.`}
        </p>
        <SocialMediaButtons />
      </div>
      {/* Bottom row: nav links */}
      <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant="link" className="text-xs h-auto py-1 px-2">{title}</Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
