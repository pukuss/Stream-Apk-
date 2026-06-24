import React from "react";
import { Link } from "react-router-dom";
import {
    Gamepad2,
    LayoutDashboard,
    Trophy,
    ChevronRight,
    ShieldCheck,
} from "lucide-react";

function Tournament_request() {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#08111f] p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
            {/* soft premium background */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300">
                            <Trophy size={20} />
                        </div>

                        <div className="min-w-0">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
                                Tournament Studio
                            </p>

                            <h2 className="mt-1 truncate text-lg font-black tracking-tight text-white">
                                Tournament Organization
                            </h2>

                            <p className="mt-1 text-xs leading-5 text-slate-400">
                                Create, request and manage tournaments from one clean host panel.
                            </p>
                        </div>
                    </div>

                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-black uppercase text-emerald-300">
                        <ShieldCheck size={12} />
                        Active
                    </span>
                </div>

                {/* Info box */}
                <div className="mb-4 rounded-2xl border border-white/10 bg-white/[0.035] p-3">
                    <p className="text-sm font-bold text-white">
                        Host your next tournament
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                        Submit tournament details, track approval, access dashboard,
                        results, support and match controls.
                    </p>
                </div>

                {/* Actions */}
                <div className="grid gap-2 sm:grid-cols-2">
                    <Link
                        to="/studio/sendrequest"
                        className="group flex items-center justify-between rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-black text-[#06111f] transition hover:bg-cyan-200 active:scale-[0.98]"
                    >
                        <span className="flex items-center gap-2">
                            <Gamepad2 size={17} />
                            Request Tournament
                        </span>

                        <ChevronRight
                            size={17}
                            className="transition group-hover:translate-x-0.5"
                        />
                    </Link>

                    <Link
                        to="/studio/dashboard"
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-slate-200 transition hover:bg-white/[0.08] hover:text-white active:scale-[0.98]"
                    >
                        <span className="flex items-center gap-2">
                            <LayoutDashboard size={17} className="text-cyan-300" />
                            Dashboard
                        </span>

                        <ChevronRight
                            size={17}
                            className="text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-white"
                        />
                    </Link>
                </div>

                {/* Footer */}
                <div className="mt-4 border-t border-white/10 pt-3">
                    <p className="text-[11px] leading-5 text-slate-500">
                        Get overview, real results, better match quality, all match access
                        and support.{" "}
                        <Link
                            to="/"
                            className="font-bold text-cyan-300 underline-offset-4 hover:underline"
                        >
                            Learn more
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Tournament_request;