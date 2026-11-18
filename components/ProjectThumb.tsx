import Image from "next/image";
import type { Project } from "@/content/profile";

/** Browser window frame shared by the web mocks. */
function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <>
      <rect className="s-frame" x="0.5" y="0.5" width="559" height="349" rx="14" />
      <path className="s-bar" d="M14.5 .5h531a14 14 0 0 1 14 14V34H.5V14.5a14 14 0 0 1 14-14z" />
      <circle className="s-dot" cx="22" cy="17.5" r="5" />
      <circle className="s-dot" cx="40" cy="17.5" r="5" />
      <circle className="s-dot" cx="58" cy="17.5" r="5" />
      <rect className="s-url" x="170" y="9" width="220" height="17" rx="8.5" />
      <text className="s-t s-xs s-mute" x="280" y="21" textAnchor="middle">
        {url}
      </text>
      {children}
    </>
  );
}

function TanawMock() {
  return (
    <svg viewBox="0 0 560 350" role="img" aria-label="Illustration of the TANAW dashboard: a sidebar, summary tiles, and a map of farm parcels with a delivery route">
      <Frame url="tanaw / municipal dashboard">
        <rect className="s-soft" x="16" y="46" width="112" height="288" rx="10" />
        <rect className="s-acc" x="28" y="60" width="24" height="24" rx="7" />
        <text className="s-t s-h s-acctext" x="60" y="77">TANAW</text>
        {[100, 126, 152, 178, 204].map((y, i) => (
          <rect key={y} className={i === 1 ? "s-card" : "s-line"} x="28" y={y} width={i === 1 ? 88 : 70} height={i === 1 ? 18 : 8} rx="4" />
        ))}
        {[
          { x: 140, label: "Parcels" },
          { x: 274, label: "Seed bags" },
          { x: 408, label: "Deliveries" },
        ].map((t) => (
          <g key={t.x}>
            <rect className="s-card" x={t.x} y="46" width="124" height="58" rx="9" />
            <text className="s-t s-xs s-mute" x={t.x + 12} y="66">
              {t.label}
            </text>
            <rect className="s-acc" x={t.x + 12} y="78" width={t.x === 274 ? 72 : 56} height="12" rx="4" />
          </g>
        ))}
        <rect className="s-fill" x="140" y="114" width="392" height="220" rx="10" />
        <path className="s-parcel" d="M170 150l46-12 22 40-40 20-30-18z" />
        <path className="s-parcel s-parcel-2" d="M246 140l58-6 10 48-50 10-22-30z" />
        <path className="s-parcel" d="M330 160l52 4-6 50-50-6z" />
        <path className="s-parcel s-parcel-2" d="M396 150l60 10-10 46-54-12z" />
        <path className="s-parcel s-parcel-2" d="M180 230l54-10 16 46-60 12z" />
        <path className="s-parcel" d="M262 228l64 2-4 52-58-6z" />
        <path className="s-parcel" d="M342 236l70-8 8 50-70 6z" />
        <path className="s-parcel s-parcel-2" d="M430 228l70 4-6 56-60-8z" />
        <polyline className="s-route" points="196,170 280,165 352,190 420,184 470,252" />
        <circle className="s-stop" cx="196" cy="170" r="6" />
        <circle className="s-stop" cx="352" cy="190" r="6" />
        <circle className="s-stop" cx="470" cy="252" r="6" />
      </Frame>
    </svg>
  );
}

function RentEaseMock() {
  const rows = [
    { y: 112, name: "Boarding house, La Paz", status: "Paid", paid: true },
    { y: 166, name: "Room 4B, Jaro", status: "Due in 3 days", paid: false },
    { y: 220, name: "Dormitory, Molo", status: "Paid", paid: true },
  ];
  return (
    <svg viewBox="0 0 560 350" role="img" aria-label="Illustration of RentEase: a monthly rent summary and a list of rentals with their payment status">
      <Frame url="rentease / my rentals">
        <text className="s-t s-h" x="24" y="68">My rentals</text>
        <rect className="s-acc" x="440" y="52" width="96" height="26" rx="8" />
        <text className="s-t s-on" x="488" y="69" textAnchor="middle">+ Add rental</text>
        <rect className="s-soft" x="24" y="84" width="512" height="18" rx="6" />
        <text className="s-t s-xs s-acctext" x="36" y="97">This month: 2 of 3 rents paid</text>
        {rows.map((r) => (
          <g key={r.y}>
            <rect className="s-card" x="24" y={r.y} width="512" height="46" rx="9" />
            <rect className="s-soft" x="36" y={r.y + 9} width="28" height="28" rx="7" />
            <text className="s-t s-h" x="76" y={r.y + 21}>{r.name}</text>
            <rect className="s-line" x="76" y={r.y + 29} width="120" height="7" rx="3.5" />
            <rect className={r.paid ? "s-fill" : "s-soft"} x="430" y={r.y + 13} width="94" height="20" rx="10" />
            <text className={`s-t s-xs ${r.paid ? "s-mute" : "s-acctext"}`} x="477" y={r.y + 27} textAnchor="middle">
              {r.status}
            </text>
          </g>
        ))}
        <rect className="s-fill" x="24" y="280" width="248" height="44" rx="9" />
        <text className="s-t s-xs s-mute" x="38" y="298">Lease ends</text>
        <rect className="s-line" x="38" y="306" width="90" height="7" rx="3.5" />
        <rect className="s-fill" x="288" y="280" width="248" height="44" rx="9" />
        <text className="s-t s-xs s-mute" x="302" y="298">Monthly rent</text>
        <rect className="s-line" x="302" y="306" width="70" height="7" rx="3.5" />
      </Frame>
    </svg>
  );
}

function RebadullaMock() {
  const rows = [
    { y: 100, time: "9:00", tag: "Vaccination" },
    { y: 152, time: "10:30", tag: "Check-up" },
    { y: 204, time: "1:00", tag: "Vaccination" },
    { y: 256, time: "2:30", tag: "Grooming" },
  ];
  return (
    <svg viewBox="0 0 560 350" role="img" aria-label="Illustration of the Rebadulla Animal Care system: today's appointments and an animal record card">
      <Frame url="rebadulla / appointments">
        <text className="s-t s-h" x="24" y="70">Today&apos;s appointments</text>
        {rows.map((r, i) => (
          <g key={r.y}>
            <rect className={i === 0 ? "s-soft" : "s-card"} x="24" y={r.y - 14} width="300" height="44" rx="9" />
            <text className="s-t s-mono" x="38" y={r.y + 12}>{r.time}</text>
            <circle className="s-acc" cx="100" cy={r.y + 8} r="11" />
            <rect className="s-line" x="120" y={r.y} width="90" height="8" rx="4" />
            <rect className="s-line" x="120" y={r.y + 13} width="60" height="6" rx="3" />
            <rect className="s-fill" x="236" y={r.y - 2} width="76" height="20" rx="10" />
            <text className="s-t s-xs s-mute" x="274" y={r.y + 12} textAnchor="middle">{r.tag}</text>
          </g>
        ))}
        <rect className="s-fill" x="340" y="46" width="196" height="288" rx="10" />
        <circle className="s-soft" cx="438" cy="100" r="30" />
        <circle className="s-acc" cx="438" cy="100" r="14" />
        <text className="s-t s-h" x="438" y="152" textAnchor="middle">Animal record</text>
        <rect className="s-line" x="380" y="164" width="116" height="7" rx="3.5" />
        <text className="s-t s-xs s-mute" x="356" y="200">Next vaccination</text>
        <rect className="s-card" x="356" y="208" width="164" height="30" rx="8" />
        <rect className="s-acc" x="368" y="219" width="70" height="8" rx="4" />
        <text className="s-t s-xs s-mute" x="356" y="262">Owner</text>
        <rect className="s-line" x="356" y="270" width="120" height="7" rx="3.5" />
        <rect className="s-line" x="356" y="284" width="90" height="7" rx="3.5" />
      </Frame>
    </svg>
  );
}

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

const MOCKS: Record<Project["id"], () => React.ReactElement> = {
  tanaw: TanawMock,
  rentease: RentEaseMock,
  rebadulla: RebadullaMock,
  "hello-expo": HelloExpoMock,
};

export default function ProjectThumb({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="thumb">
        <Image
          className="thumb-img"
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          width={1120}
          height={700}
          sizes="(min-width: 900px) 50vw, 100vw"
        />
      </div>
    );
  }
  const Mock = MOCKS[project.id];
  return (
    <div className="thumb">
      <Mock />
    </div>
  );
}
