"use client";

import { motion } from "framer-motion";
import type { Role } from "@/data/industries";

const roleIcons = [
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
  <svg key="5" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>,
];

const cardColors = [
  { bg: "bg-navy-50", text: "text-navy", border: "border-navy-100/60", gradient: "from-navy-50/80 to-white" },
  { bg: "bg-gold-50", text: "text-gold-700", border: "border-gold-100/60", gradient: "from-gold-50/80 to-white" },
  { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100/60", gradient: "from-sky-50/80 to-white" },
  { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100/60", gradient: "from-emerald-50/80 to-white" },
  { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100/60", gradient: "from-violet-50/80 to-white" },
  { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100/60", gradient: "from-amber-50/80 to-white" },
];

interface WhoWeHelpProps {
  roles?: Role[];
  clientNoun?: string;
}

export default function WhoWeHelp({ roles: propRoles, clientNoun = "firm" }: WhoWeHelpProps) {
  const roles = propRoles || defaultRoles;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/80 to-white pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-100 text-xs font-semibold text-gold-700 uppercase tracking-wider mb-4">
            Your Team
          </span>
          <h2 className="text-headline text-neutral-900">
            Built for everyone in your {clientNoun},{" "}
            <span className="font-serif italic font-normal">not just the experts.</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Every role in your {clientNoun} has tasks AI can already handle — they just don&apos;t know it yet.
            We find those tasks, build the templates, and set up each person with a simple guide they can use from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {roles.map((role, index) => {
            const color = cardColors[index % cardColors.length];
            return (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`group relative p-5 rounded-2xl bg-gradient-to-b ${color.gradient} border ${color.border} shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-default text-center`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${color.bg} ${color.text} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  {roleIcons[index % roleIcons.length]}
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
                  {role.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-600 leading-snug">
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const defaultRoles: Role[] = [
  { name: "Paralegals", description: "Intake processing, document summaries, deadline reminders" },
  { name: "Office Managers", description: "Internal emails, vendor letters, weekly reports" },
  { name: "Marketing", description: "Newsletters, social posts, client outreach" },
  { name: "Billing Staff", description: "Billing narratives, collection emails, invoice prep" },
  { name: "Legal Assistants", description: "Client emails, follow-ups, scheduling confirmations" },
  { name: "Partners", description: "Meeting summaries, firm updates, strategy drafts" },
];
