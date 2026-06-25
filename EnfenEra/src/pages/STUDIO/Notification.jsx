import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  ChevronDown,
  EllipsisVertical,
  Gamepad2,
  Info,
  PenLine,
  Printer,
  Trash2,
  Users,
  IndianRupee,
  ShieldAlert,
  ExternalLink,
} from "lucide-react";

function statusStyle(status = "") {
  const s = status.toLowerCase();

  if (s === "approved" || s === "live") {
    return "bg-green-500/10 text-green-400 border-green-500/20";
  }

  if (s === "rejected" || s === "cancelled") {
    return "bg-red-500/10 text-red-400 border-red-500/20";
  }

  return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
}

function money(value) {
  if (!value) return "₹0";
  return String(value).includes("₹") ? value : `₹${value}`;
}

function MiniStat({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
      <div className="mb-1 flex items-center gap-1.5 text-xs text-slate-400">
        {icon}
        <span>{label}</span>
      </div>

      <p className="truncate text-sm font-semibold text-slate-100">
        {value || "—"}
      </p>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-800 py-2 last:border-0">
      <span className="text-xs text-slate-400">{label}</span>

      <span className="max-w-[190px] truncate text-right text-xs font-medium text-slate-200">
        {value || "—"}
      </span>
    </div>
  );
}

function Notification({ data }) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const description =
    data?.description || data?.discription || "No description added";

  const status = data?.status || "pending";

  return (
    <article className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-white shadow-lg">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-300">
                Tournament Request
              </span>

              <span
                className={`rounded-full border px-2.5 py-1 text-xs font-medium capitalize ${statusStyle(
                  status
                )}`}
              >
                {status}
              </span>
            </div>

            <h3 className="truncate text-lg font-semibold text-slate-100">
              {data?.title || "Untitled Tournament"}
            </h3>

            <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
              <span className="truncate">
                {data?.name || data?.username || "Unknown Host"}
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-600" />

              <span className="flex items-center gap-1 text-slate-300">
                <Gamepad2 size={13} />
                {data?.game || "Game"}
              </span>
            </div>
          </div>

          {/* Menu */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setMenu((prev) => !prev)}
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition hover:bg-slate-800 hover:text-white active:scale-95"
            >
              <EllipsisVertical size={17} />
            </button>

            <AnimatePresence>
              {menu && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-11 z-30 w-44 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-xl"
                >
                  <button className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10">
                    <Trash2 size={14} />
                    Delete
                  </button>

                  <button className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-900">
                    <Printer size={14} />
                    Print
                  </button>

                  <button className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-900">
                    <Info size={14} />
                    Info
                  </button>

                  <button className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-900">
                    <PenLine size={14} />
                    Edit
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
          {description}
        </p>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <MiniStat
            icon={<IndianRupee size={13} />}
            label="Entry"
            value={money(data?.entryFee)}
          />

          <MiniStat
            icon={<Users size={13} />}
            label="Slots"
            value={data?.slots || 0}
          />

          <MiniStat
            icon={<IndianRupee size={13} />}
            label="Total"
            value={money(data?.totalAmount)}
          />
        </div>

        {/* Date Row */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-3 py-2.5">
          <div className="flex min-w-0 items-center gap-2 text-xs text-slate-400">
            <CalendarDays size={14} className="text-slate-300" />

            <span className="truncate">
              {data?.matchDate || "No date"} • {data?.matchTime || "No time"}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="ml-2 flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-blue-400 transition hover:bg-blue-500/10"
          >
            Details

            <motion.span animate={{ rotate: open ? 180 : 0 }}>
              <ChevronDown size={14} />
            </motion.span>
          </button>
        </div>

        {/* Expanded Details */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Match Details
                  </h4>

                  <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    #{data?.requestId?.slice?.(0, 6) || "ID"}
                  </span>
                </div>

                <div>
                  <DetailRow label="Request ID" value={data?.requestId} />
                  <DetailRow label="Email" value={data?.email} />
                  <DetailRow label="Map" value={data?.map} />
                  <DetailRow label="Mode" value={data?.gameMode} />
                  <DetailRow label="Match Type" value={data?.matchType} />
                  <DetailRow label="Hosting" value={data?.hostingType} />
                  <DetailRow
                    label="Sponsor"
                    value={data?.sponsor || "Unsponsored"}
                  />
                  <DetailRow label="GST" value={money(data?.gstAmount)} />
                </div>

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-3">
                  <div className="mb-1.5 flex items-center gap-2 text-slate-300">
                    <ShieldAlert size={14} />

                    <p className="text-xs font-semibold">Custom Rules</p>
                  </div>

                  <p className="text-xs leading-5 text-slate-400">
                    {data?.customRules || "No custom rules added."}
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
                >
                  Open Tournament
                  <ExternalLink size={15} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

export default Notification;