import React from "react";
import { Link } from "react-router-dom";
import {
    Settings,
    Trophy,
    Medal,
    ChevronRight,
    ShieldCheck,
    UserRound,
} from "lucide-react";
import { useSelector } from "react-redux";

function T_ProfileBar() {
    const { profile, user } = useSelector((state) => state.auth || {});

    const displayName =
        profile?.name || user?.name || profile?.username || "Player";

    return (
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#08111f] p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
            {/* premium glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-indigo-500/15 blur-3xl" />

            <div className="relative">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300">
                            <UserRound size={20} />
                        </div>

                        <div className="min-w-0">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
                                Player Control
                            </p>

                            <h2 className="mt-1 truncate text-lg font-black tracking-tight text-white">
                                Profile Settings
                            </h2>

                            <p className="mt-1 text-xs leading-5 text-slate-400">
                                Customize player details, rank, rewards and dashboard access.
                            </p>
                        </div>
                    </div>

                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-amber-300">
                        <Trophy size={18} />
                    </div>
                </div>

                {/* User small info */}
                <div className="mb-4 rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-2.5">
                    <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-white">
                                {displayName}
                            </p>
                            <p className="text-[11px] font-medium text-slate-500">
                                Studio profile ready to manage
                            </p>
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2 py-1 text-[10px] font-black uppercase text-emerald-300">
                            <ShieldCheck size={12} />
                            Active
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="grid gap-2 sm:grid-cols-2">
                    <Link
                        to="/studio/t_profile"
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-cyan-300 px-4 py-3 text-sm font-black text-[#06111f] transition hover:bg-cyan-200 active:scale-[0.98]"
                    >
                        <span className="flex items-center gap-2">
                            <Settings size={17} />
                            Edit Profile
                        </span>

                        <ChevronRight
                            size={17}
                            className="transition group-hover:translate-x-0.5"
                        />
                    </Link>

                    <Link
                        to="/studio/rank"
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-slate-200 transition hover:bg-white/[0.08] hover:text-white active:scale-[0.98]"
                    >
                        <span className="flex items-center gap-2">
                            <Medal size={17} className="text-amber-300" />
                            Rank Center
                        </span>

                        <ChevronRight
                            size={17}
                            className="text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-white"
                        />
                    </Link>
                </div>

                {/* Footer text */}
                <div className="mt-4 border-t border-white/10 pt-3">
                    <p className="text-[11px] leading-5 text-slate-500">
                        Dashboard access, overview, real results, match quality, support and
                        reward tracking are managed from this profile area.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default T_ProfileBar;