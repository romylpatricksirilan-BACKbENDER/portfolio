"use client";

import { useEffect, useState } from "react";
import CopyEmailButton from "./CopyEmailButton";
import { DownloadIcon } from "./Icons";

/**
 * Phones only: keeps email and résumé within thumb reach once the intro has scrolled away,
 * and steps aside while the Contact section is on screen.
 */
export default function MobileActionBar({ email, resumeHref }: { email: string; resumeHref: string }) {
  const [introVisible, setIntroVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const intro = document.getElementById("top");
    const contact = document.getElementById("contact");
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === intro) setIntroVisible(e.isIntersecting);
        if (e.target === contact) setContactVisible(e.isIntersecting);
      }
    });
    if (intro) observer.observe(intro);
    if (contact) observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const show = !introVisible && !contactVisible;

  return (
    <div className="mbar" data-show={show ? "" : undefined} aria-hidden={!show} inert={!show}>
      <CopyEmailButton email={email} className="btn btn-primary" />
      <a className="btn btn-ghost" href={resumeHref} target="_blank" rel="noopener">
        <DownloadIcon />
        Résumé
      </a>
    </div>
  );
}
