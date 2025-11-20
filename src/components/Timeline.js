import { useContext } from "react";
import { ContentContext } from "@/context/ContentContext";

export default function Timeline() {
  const content = useContext(ContentContext);

  if (!content) return;
  const timeline = content.timeline;
  const phases = timeline.phases;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 md:p-12 min-h-[400px] relative shadow-xl">
        {/* Treble Clef - hidden on mobile */}
        <div className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 opacity-20 select-none pointer-events-none">
          <svg width="80" height="160" viewBox="0 0 60 120" fill="#000">
            <text x="5" y="70" fontSize="100" fontFamily="Georgia, serif">
              𝄞
            </text>
          </svg>
        </div>

        {/* Music Staff Lines - hidden on mobile */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="80"
              y1={`${30 + i * 10}%`}
              x2="100%"
              y2={`${30 + i * 10}%`}
              stroke="#d1d5db"
              strokeWidth="2"
            />
          ))}

          {/* Connecting line between notes */}
          <path
            d={`M 180 ${phases[0].notePosition} 
                L ${180 + (100 / 4) * 100} ${phases[1].notePosition} 
                L ${180 + (100 / 4) * 200} ${phases[2].notePosition} 
                L ${180 + (100 / 4) * 300} ${phases[3].notePosition}`}
            stroke="#9ca3af"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4,4"
          />
        </svg>

        {/* Timeline Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:pl-16">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Musical Note */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -top-2 md:-top-10">
                <svg width="50" height="75" viewBox="0 0 40 60">
                  {/* Note stem */}
                  <line
                    x1="32"
                    y1="20"
                    x2="32"
                    y2="50"
                    stroke={phase.color}
                    strokeWidth="3"
                  />
                  {/* Note head */}
                  <ellipse
                    cx="24"
                    cy="50"
                    rx="12"
                    ry="9"
                    fill={phase.color}
                    transform="rotate(-20 24 50)"
                  />
                  {/* Flag */}
                  <path
                    d="M 32 20 Q 42 25, 38 35 Q 36 30, 32 32"
                    fill={phase.color}
                  />
                </svg>
              </div>

              {/* Content Box */}
              <div
                className="bg-white rounded-lg p-5 shadow-md border-l-4 pt-14 md:pt-5 md:mt-10"
                style={{ borderColor: phase.color }}
              >
                <h3 className="text-gray-900 text-lg mb-1">{phase.title}</h3>
                <p className="text-lg text-gray-500 mb-4">{phase.period}</p>

                <ul className="space-y-1.5">
                  {phase.details.map((detail, i) => (
                    <li key={i} className="text-md text-gray-700 flex gap-1.5">
                      <span style={{ color: phase.color }}>♪</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* End Bar Lines - hidden on mobile */}
        <svg
          className="hidden md:block absolute right-4 top-[30%] pointer-events-none"
          width="10"
          height="40%"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#6b7280"
            strokeWidth="2.5"
          />
          <line
            x1="6"
            y1="0"
            x2="6"
            y2="100%"
            stroke="#6b7280"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
}
