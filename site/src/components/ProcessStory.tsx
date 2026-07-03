"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One continuous line-art scene for the "How Calqulis works" section.
 * A single signal travels the whole story: scattered behavior streams in,
 * converges, passes through the analysis machine, rises through the
 * dashboard as the chart itself, splits into three team actions, and a
 * dashed refine loop returns it to analysis. Strokes draw on in story
 * order when scrolled into view; a pulse rides the full circuit.
 */

const INK = "#1e1b4b";
const SIGNAL = "#4338ca";
const DIM = "rgba(67, 56, 202, 0.3)";
const CYAN = "#22d3ee";
const LABEL = "#64748b";

// Closed circuit the pulse travels forever: through the machine, up the
// dashboard chart, out the middle action, around the refine loop, back
// along the return line, and into the machine again.
const CIRCUIT =
  "M300 160 C312 178 318 190 330 190 L336 181 L342 192 L348 183 C380 175 402 186 420 196 " +
  "L535 196 L568 172 L594 184 L624 150 L650 136 " +
  "L658 136 C700 136 722 138 744 142 C800 152 830 158 872 162 " +
  "C980 165 1000 163 1036 160 A44 44 0 1 1 1080 204 " +
  "C1080 275 1030 298 950 298 L430 298 C392 298 364 276 364 240 L364 226 " +
  "L364 192 L338 172 L300 160";

const STREAMS = [
  { d: "M56 70 C110 90 140 130 178 154", dur: "3.1s", begin: "0s" },
  { d: "M48 150 C100 154 140 158 178 160", dur: "2.6s", begin: "0.9s" },
  { d: "M64 230 C110 210 145 180 178 166", dur: "3.4s", begin: "1.6s" },
  { d: "M119 108 C145 122 160 140 177 152", dur: "2.2s", begin: "0.5s" },
  { d: "M115 192 C145 180 160 172 177 164", dur: "2.4s", begin: "2.1s" },
];

type Draw = { style?: React.CSSProperties };
const at = (i: number): Draw => ({ style: { "--i": i } as React.CSSProperties });

export default function ProcessStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const showPulse = inView && !reducedMotion;

  return (
    <div ref={ref} className={"process-story overflow-x-auto " + (inView ? "in" : "")}>
      <svg
        viewBox="0 0 1200 340"
        className="mx-auto block h-auto w-full min-w-[960px] max-w-[1200px]"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="One continuous line drawing: scattered behavior signals converge, pass through an analysis machine, rise through a dashboard as a chart ending in a highlighted insight, split into outreach, spend, and strategy actions, then loop back into analysis on a dashed return line"
      >
        {/* ---- Act 1: sources stream in and converge ---- */}
        <g stroke={INK} strokeWidth="1.6">
          <circle className="psd" pathLength={1} {...at(0)} cx="44" cy="64" r="14" />
          <path className="psd" pathLength={1} {...at(0)} d="M39 69 v-7 M44 69 v-11 M49 69 v-5" />
          <circle className="psd" pathLength={1} {...at(0)} cx="34" cy="150" r="14" />
          <path className="psd" pathLength={1} {...at(0)} d="M26 150 c2.5 -7 5.5 -7 8 0 c2.5 7 5.5 7 8 0" />
          <circle className="psd" pathLength={1} {...at(1)} cx="52" cy="236" r="14" />
          <circle className="psd" pathLength={1} {...at(1)} cx="52" cy="232" r="3.5" />
          <path className="psd" pathLength={1} {...at(1)} d="M45 243 c0 -5 14 -5 14 0" />
          <circle className="psd" pathLength={1} {...at(1)} cx="108" cy="102" r="12" />
          <path className="psd" pathLength={1} {...at(1)} d="M100 102 h4 l2 -5 3 10 2 -5 h5" />
          <circle className="psd" pathLength={1} {...at(1)} cx="104" cy="198" r="12" />
          <path className="psd" pathLength={1} {...at(1)} d="M93 198 h22 M104 187 c-4.5 3.5 -4.5 18.5 0 22 M104 187 c4.5 3.5 4.5 18.5 0 22" />
        </g>
        <g stroke={DIM} strokeWidth="1.3">
          {STREAMS.map((s, i) => (
            <path key={i} className="psd" pathLength={1} {...at(2)} d={s.d} />
          ))}
        </g>

        {/* ---- The signal: one line from convergence to insight ---- */}
        <g stroke={SIGNAL} strokeWidth="2.2">
          <circle className="psd" pathLength={1} {...at(3)} cx="186" cy="160" r="8" />
          <path
            className="psd"
            pathLength={1}
            {...at(4)}
            d="M194 160 h12 l7 -20 8 32 8 -42 8 46 8 -30 7 14 h48"
          />
        </g>
        <text className="psf" {...at(4)} x="233" y="204" textAnchor="middle" fontSize="9.5" letterSpacing="0.14em" fill={LABEL}>
          RAW
        </text>

        {/* ---- Act 2: the analysis engine ---- */}
        <text className="psf" {...at(5)} x="360" y="94" textAnchor="middle" fontSize="9.5" letterSpacing="0.14em" fill={LABEL}>
          ANALYSIS ENGINE
        </text>
        <g stroke={INK} strokeWidth="1.7">
          <rect className="psd" pathLength={1} {...at(5)} x="300" y="105" width="120" height="110" rx="14" />
          <circle className="psd" pathLength={1} {...at(6)} cx="349" cy="137" r="13" />
          <path
            className="psd"
            pathLength={1}
            {...at(6)}
            d="M349 118 v6 M349 150 v6 M330 137 h6 M362 137 h6 M358 128 l4 -4 M340 128 l-4 -4 M358 146 l4 4 M340 146 l-4 4"
          />
          <circle className="psd" pathLength={1} {...at(6)} cx="376" cy="155" r="8.5" />
          <path className="psd" pathLength={1} {...at(6)} d="M376 141 v5 M376 164 v5 M362 155 h5 M385 155 h5" />
        </g>
        <g stroke={DIM} strokeWidth="1.4">
          <path
            className="psd"
            pathLength={1}
            {...at(6)}
            d="M300 160 C312 178 318 190 330 190 l6 -9 6 11 6 -9 C380 175 402 186 420 196"
          />
        </g>
        <circle className="psf" {...at(6)} cx="349" cy="137" r="2.6" fill={CYAN} />

        {/* ---- structured run into the dashboard ---- */}
        <g stroke={SIGNAL} strokeWidth="2.2">
          <path className="psd" pathLength={1} {...at(7)} d="M420 196 H535 L568 172 L594 184 L624 150 L650 136" />
        </g>
        <g stroke={DIM} strokeWidth="1.3">
          <path className="psd" pathLength={1} {...at(7)} d="M444 192 v-5 M468 192 v-5 M492 192 v-5" />
        </g>
        <text className="psf" {...at(7)} x="470" y="180" textAnchor="middle" fontSize="9.5" letterSpacing="0.14em" fill={LABEL}>
          STRUCTURED
        </text>

        {/* ---- Act 3: the live dashboard, chart is the signal itself ---- */}
        <g stroke={INK} strokeWidth="1.7">
          <rect className="psd" pathLength={1} {...at(8)} x="520" y="95" width="170" height="130" rx="12" />
          <path className="psd" pathLength={1} {...at(8)} d="M605 225 v14 M584 242 q21 7 42 0" />
        </g>
        <text className="psf" {...at(8)} x="605" y="266" textAnchor="middle" fontSize="9.5" letterSpacing="0.14em" fill={LABEL}>
          LIVE DASHBOARD
        </text>
        <g stroke={DIM} strokeWidth="1.2" strokeDasharray="3 5">
          <path className="psf" {...at(8)} d="M532 145 h146 M532 178 h146" />
        </g>
        <g stroke={CYAN} strokeWidth="2">
          <circle className="psd" pathLength={1} {...at(9)} cx="650" cy="136" r="8" />
        </g>
        <g stroke={INK} strokeWidth="1.5">
          <path className="psd" pathLength={1} {...at(9)} d="M650 122 v-6 M663 128 l5 -4 M664 144 l6 4 M638 125 l-5 -5" />
        </g>
        <circle className="psf" {...at(9)} cx="650" cy="136" r="3" fill={CYAN} />

        {/* ---- Act 4: the insight splits into three actions ---- */}
        <g stroke={SIGNAL} strokeWidth="2.2">
          <path className="psd" pathLength={1} {...at(10)} d="M658 136 C700 136 722 138 744 142" />
        </g>
        <circle className="psd" pathLength={1} {...at(10)} cx="748" cy="143" r="5" stroke={SIGNAL} strokeWidth="2" />
        <g stroke={DIM} strokeWidth="1.3">
          <path className="psd" pathLength={1} {...at(11)} d="M752 139 C800 102 850 70 880 66" />
          <path className="psd" pathLength={1} {...at(11)} d="M753 144 C800 152 830 158 872 162" />
          <path className="psd" pathLength={1} {...at(11)} d="M752 148 C800 186 850 228 880 240" />
        </g>
        <g stroke={INK} strokeWidth="1.7">
          <circle className="psd" pathLength={1} {...at(12)} cx="902" cy="66" r="20" />
          <circle className="psd" pathLength={1} {...at(12)} cx="902" cy="66" r="11" />
          <path className="psd" pathLength={1} {...at(12)} d="M882 184 h44 M890 184 v-18 M902 184 v-30 M914 184 v-10" />
          <path className="psd" pathLength={1} {...at(12)} d="M902 258 v-34 M902 224 l20 7 -20 7 M884 258 q18 7 36 0" />
        </g>
        <circle className="psf" {...at(12)} cx="902" cy="66" r="2.8" fill={CYAN} />
        <text className="psf" {...at(12)} x="902" y="102" textAnchor="middle" fontSize="9" letterSpacing="0.14em" fill={LABEL}>
          OUTREACH
        </text>
        <text className="psf" {...at(12)} x="904" y="200" textAnchor="middle" fontSize="9" letterSpacing="0.14em" fill={LABEL}>
          SPEND
        </text>
        <text className="psf" {...at(12)} x="902" y="278" textAnchor="middle" fontSize="9" letterSpacing="0.14em" fill={LABEL}>
          STRATEGY
        </text>

        {/* ---- Act 5: actions feed the refine loop ---- */}
        <g stroke={DIM} strokeWidth="1.3">
          <path className="psd" pathLength={1} {...at(13)} d="M924 66 C990 80 1010 110 1032 142" />
          <path className="psd" pathLength={1} {...at(13)} d="M926 165 C980 165 1000 163 1033 160" />
          <path className="psd" pathLength={1} {...at(13)} d="M920 250 C990 235 1010 200 1032 176" />
        </g>
        <g stroke={INK} strokeWidth="1.8">
          <circle className="psd" pathLength={1} {...at(13)} cx="1080" cy="160" r="44" />
        </g>
        <g stroke={DIM} strokeWidth="1.2" strokeDasharray="3 5">
          <circle className="psf" {...at(13)} cx="1080" cy="160" r="24" />
        </g>
        <g stroke={CYAN} strokeWidth="2">
          <path className="psd" pathLength={1} {...at(14)} d="M1117 151 l7 11 7 -11" />
          <path className="psd" pathLength={1} {...at(14)} d="M1029 169 l7 -11 7 11" />
        </g>
        <circle className="psf" {...at(14)} cx="1080" cy="160" r="3" fill={CYAN} />

        {/* ---- dashed return: refine flows back into analyze ---- */}
        <g stroke={SIGNAL} strokeWidth="1.8" strokeDasharray="7 7" opacity="0.75">
          <path className="psf" {...at(15)} d="M1080 204 C1080 275 1030 298 950 298 L430 298 C392 298 364 276 364 240 L364 228" />
        </g>
        <path className="psd" pathLength={1} {...at(15)} d="M357 233 l7 -11 7 11" stroke={SIGNAL} strokeWidth="1.8" />
        <text className="psf" {...at(15)} x="720" y="316" textAnchor="middle" fontSize="9.5" letterSpacing="0.16em" fill={LABEL}>
          FRESH BEHAVIOR FLOWS BACK INTO ANALYSIS
        </text>

        {/* ---- living signal: dots stream in, one pulse rides the circuit ---- */}
        {showPulse && (
          <g className="ps-pulse">
            {STREAMS.map((s, i) => (
              <circle key={i} r="2.4" fill={SIGNAL} opacity="0.7">
                <animateMotion dur={s.dur} begin={s.begin} repeatCount="indefinite" path={s.d} />
              </circle>
            ))}
            <g>
              <circle r="7" fill={CYAN} opacity="0.3" />
              <circle r="3.6" fill={CYAN} />
              <animateMotion dur="18s" repeatCount="indefinite" path={CIRCUIT} />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
