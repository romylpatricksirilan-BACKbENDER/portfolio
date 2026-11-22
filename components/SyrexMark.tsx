/**
 * The SYREX "SX" symbol. The S's middle and bottom bars turn into the two arms of the X.
 * Built on a grid: bars 18 units thick, 12-unit gaps, 45° diagonals of the same weight.
 * It fills with currentColor, so the parent sets its color.
 */
export const SX_VIEWBOX = "1.1 0 139.3 78";

export const SX_PATHS = [
  "M97.1 0A0.8 0.8 0 0 1 97.66 1.37L81.26 17.77A0.8 0.8 0 0 1 80.7 18L56.28 18A2 2 0 0 0 54.87 18.59L46.02 27.44A1.5 1.5 0 0 0 47.08 30L84.27 30A9 9 0 0 1 90.64 32.64L134.63 76.63A0.8 0.8 0 0 1 134.07 78L110.88 78A0.8 0.8 0 0 1 110.31 77.77L82.01 49.46A5 5 0 0 0 78.47 48L36.21 48A15 15 0 0 1 25.61 22.39L41.56 6.44A22 22 0 0 1 57.11 0Z",
  "M1.93 78A0.8 0.8 0 0 1 1.37 76.63L17.77 60.23A0.8 0.8 0 0 1 18.33 60L53.1 60A7 7 0 0 0 58.05 57.95L115.77 0.23A0.8 0.8 0 0 1 116.33 0L139.52 0A0.8 0.8 0 0 1 140.09 1.37L68.14 73.31A16 16 0 0 1 56.83 78Z",
];

export default function SyrexMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox={SX_VIEWBOX} fill="currentColor" aria-hidden="true" focusable="false">
      {SX_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
