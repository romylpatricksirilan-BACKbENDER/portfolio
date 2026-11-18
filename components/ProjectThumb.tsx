import type { CSSProperties, ReactElement } from "react";
import Image from "next/image";
import type { Project } from "@/content/profile";

function HelloExpoMock() {
  return (
    <svg viewBox="0 0 560 350" role="img" aria-label="Illustration of Hello Expo on a phone: a name field, a live greeting, and a Say hello button">
      <rect className="s-fill" x="0.5" y="0.5" width="559" height="349" rx="14" />
      <rect className="s-frame" x="200" y="14" width="160" height="322" rx="26" />
      <rect className="s-soft" x="210" y="24" width="140" height="96" rx="18" />
      <circle className="s-acc" cx="280" cy="64" r="20" />
      <rect className="s-dot" x="260" y="30" width="40" height="6" rx="3" />
      <text className="s-t s-big" x="222" y="152">Hello, Romyl!</text>
      <text className="s-t s-xs s-mute" x="222" y="172">Updates as you type</text>
      <rect className="s-card" x="222" y="186" width="116" height="30" rx="8" />
      <text className="s-t s-sm" x="232" y="205">Romyl</text>
      <rect className="s-acc" x="222" y="228" width="116" height="32" rx="9" />
      <text className="s-t s-on" x="280" y="248" textAnchor="middle">Say hello</text>
      <rect className="s-line" x="222" y="276" width="96" height="7" rx="3.5" />
      <rect className="s-line" x="222" y="290" width="70" height="7" rx="3.5" />
      <rect className="s-dot" x="252" y="320" width="56" height="5" rx="2.5" />
      <rect className="s-card" x="40" y="96" width="132" height="64" rx="12" />
      <text className="s-t s-xs s-mute" x="54" y="118">Runs on</text>
      <text className="s-t s-h" x="54" y="140">iOS · Android · Web</text>
      <rect className="s-card" x="388" y="190" width="132" height="64" rx="12" />
      <text className="s-t s-xs s-mute" x="402" y="212">Navigation</text>
      <text className="s-t s-h" x="402" y="234">Expo Router</text>
    </svg>
  );
}

/** Illustrated stand-ins for projects that have no screenshot yet. */
const MOCKS: Partial<Record<Project["id"], () => ReactElement>> = {
  "hello-expo": HelloExpoMock,
};

/** Rendered widths, so the browser downloads a screenshot no larger than it is shown. */
const SIZES = {
  browser: "(min-width: 1200px) 560px, (min-width: 760px) 50vw, 100vw",
  phone: "(min-width: 1200px) 240px, (min-width: 760px) 22vw, 42vw",
};

export default function ProjectThumb({ project }: { project: Project }) {
  const shot = project.screenshot;
  if (shot) {
    // The frame's width is derived from the screenshot's aspect ratio so it fits the 16:10 stage uncropped.
    const ratio = { "--r": (shot.src.width / shot.src.height).toFixed(4) } as CSSProperties;
    return (
      <div className={`thumb thumb-${shot.frame}`}>
        <div className="thumb-stage">
          <div className={`shot shot-${shot.frame}`} style={ratio}>
            {shot.frame === "browser" && (
              <div className="shot-bar" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            )}
            <Image src={shot.src} alt={shot.alt} placeholder="blur" sizes={SIZES[shot.frame]} />
          </div>
        </div>
      </div>
    );
  }
  const Mock = MOCKS[project.id];
  if (!Mock) return null;
  return (
    <div className="thumb">
      <Mock />
    </div>
  );
}
