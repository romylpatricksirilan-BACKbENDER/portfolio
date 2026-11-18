type IconProps = { className?: string };

function Stroke({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg className={`ic ${className ?? ""}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg className={`ic fill ${className ?? ""}`} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={`ic fill ${className ?? ""}`} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        fillRule="evenodd"
        d="M3 0h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zM3 6h2.3v7H3zM2.8 3.75a1.35 1.35 0 1 0 2.7 0a1.35 1.35 0 1 0-2.7 0zM7 6h2.2v1c.45-.75 1.25-1.2 2.3-1.2 1.75 0 2.6 1.1 2.6 3.1V13h-2.3V9.3c0-1-.4-1.6-1.25-1.6-.9 0-1.35.65-1.35 1.6V13H7z"
      />
    </svg>
  );
}

export const ArrowIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Stroke>
);

export const DownloadIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </Stroke>
);

export const SunIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </Stroke>
);

export const MoonIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Stroke>
);

export const MenuIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Stroke>
);

export const CloseIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Stroke>
);

export const CopyIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h8" />
  </Stroke>
);

export const MailIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Stroke>
);

export const LockIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Stroke>
);
