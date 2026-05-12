'use client';

import Image from 'next/image';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

const projects = [
  {
    index: '01',
    label: 'Projects',
    heading: ["I've", 'built', 'things.'],
    description:
      'A collection of full-stack web apps, data tools, and AI experiments — each one a step forward in craft and thinking.',
    image: { src: '/static/images/projects.webp', width: 600, height: 770 },
    bg: '#0a0a0a',
    fg: '#ffffff',
    accent: '#10B981',
    divider: 'border-white/20',
    tags: ['Next.js', 'React', 'Python', 'Supabase'],
    meta: null,
  },
  {
    index: '02',
    label: 'Hotel Management System',
    heading: ['Hotel', 'Mgmt', 'System'],
    description:
      'A full-stack hotel management platform with room booking, guest records, billing, and staff dashboards. Built for real operational workflows.',
    image: { src: '/static/images/hotel-management.webp', width: 600, height: 554 },
    bg: '#10B981',
    fg: '#ffffff',
    accent: '#fff',
    divider: 'border-white/30',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS'],
    meta: [
      { label: 'Type', value: 'Full-Stack Web App' },
      { label: 'Stack', value: 'Next.js · Supabase' },
      { label: 'Status', value: 'Shipped' },
    ],
  },
  {
    index: '03',
    label: 'Room Reservation System',
    heading: ['Room', 'Reservation', 'System'],
    description:
      'Real-time room availability, booking flow with conflict detection, and a clean UI. Designed to reduce friction for both guests and staff.',
    image: { src: '/static/images/room-reservation.webp', width: 600, height: 717 },
    bg: '#F5F0E8',
    fg: '#000000',
    accent: '#10B981',
    divider: 'border-black/20',
    tags: ['React', 'TypeScript', 'Supabase'],
    meta: [
      { label: 'Type', value: 'Booking Flow' },
      { label: 'Stack', value: 'React · TypeScript' },
      { label: 'Status', value: 'Live' },
    ],
  },
];

export default function Works() {
  return (
    <div id="works">
      <FlowArt aria-label="Vedant Sharma — Projects">
        {projects.map(({ index, label, heading, description, image, bg, fg, accent, divider, tags, meta }) => (
          <FlowSection
            key={index}
            aria-label={label}
            style={{ backgroundColor: bg, color: fg }}
          >
            {/* Index + label */}
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: fg, opacity: 0.6 }}>
              {index} — {label}
            </p>

            <hr className={`my-0 border-t ${divider}`} />

            {/* Giant heading */}
            <div>
              <h2
                className="font-extrabold leading-[0.85] uppercase tracking-tight"
                style={{
                  fontSize: 'clamp(3.5rem, 12vw, 14rem)',
                  color: fg,
                }}
              >
                {heading.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < heading.length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>

            <hr className={`my-0 border-t ${divider}`} />

            {/* Body row: description + image */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[4vw] items-start">
              {/* Left: description + tags + meta */}
              <div className="flex-1 flex flex-col gap-6">
                <p
                  className="max-w-[50ch] font-normal leading-relaxed"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 1.75rem)', opacity: 0.85 }}
                >
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                      style={{
                        borderColor: accent,
                        color: accent,
                        backgroundColor: `${accent}15`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta table */}
                {meta && (
                  <div className="flex flex-col gap-2 mt-2">
                    {meta.map(({ label: l, value }) => (
                      <div key={l} className="flex gap-4 text-sm" style={{ opacity: 0.7 }}>
                        <span className="font-bold uppercase tracking-wider w-16">{l}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: project screenshot */}
              <div className="w-full lg:w-[40%] flex-shrink-0">
                <div
                  className="overflow-hidden rounded-xl shadow-2xl"
                  style={{ boxShadow: `0 24px 60px ${bg === '#0a0a0a' ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.25)'}` }}
                >
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={label}
                    className="w-full h-auto object-cover"
                    priority={index === '01'}
                  />
                </div>
              </div>
            </div>

            <hr className={`my-0 border-t ${divider}`} />
          </FlowSection>
        ))}
      </FlowArt>
    </div>
  );
}
