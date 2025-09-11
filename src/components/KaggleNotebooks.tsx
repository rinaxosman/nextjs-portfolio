// "use client";

// import { ExternalLink } from "lucide-react";
// import { KAGGLE_NOTEBOOKS, type KaggleItem } from "@/data/kaggle";

// export default function KaggleNotebooks({
//   items,
//   limit = 3,
//   title = "Kaggle notebooks",
// }: {
//   items?: KaggleItem[];
//   limit?: number;
//   title?: string;
// }) {
//   const list = (items ?? KAGGLE_NOTEBOOKS).slice(0, limit);

//   return (
//     <div className="mt-10">
//       <div className="mb-3 text-sm text-neutral-300">{title}</div>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {list.map((n) => (
//           <a
//             key={n.url}
//             href={n.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.06]"
//             aria-label={n.title}
//           >
//             {/* Header row: grid prevents overlap */}
//             <div className="grid grid-cols-[1fr_auto] items-start gap-3">
//               {/* left: icon + title/note */}
//               <div className="flex items-start gap-3 min-w-0">
//                 <div className="mt-0.5 h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-cyan-300/30 to-blue-400/20 ring-1 ring-white/10" />
//                 <div className="min-w-0">
//                   <div className="font-semibold leading-snug group-hover:underline truncate">
//                     {n.title}
//                   </div>
//                   {n.note && (
//                     <div className="mt-1 text-sm text-neutral-400 line-clamp-2">
//                       {n.note}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* right: badge (auto column) */}
//               <span className="justify-self-end shrink-0 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2 py-0.5 text-[10px] tracking-wide text-cyan-300">
//                 KAGGLE
//               </span>
              
//             </div>

//             <div className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-300">
//               Open <ExternalLink size={14} className="opacity-80" />
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }
