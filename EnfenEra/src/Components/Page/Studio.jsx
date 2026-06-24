import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bell,
    X,
    Gamepad2,
    Sparkles,
    Trophy,
    ShieldCheck,
    Activity,
    Clock,
    RefreshCw,
    Plus,
    AlertCircle,
    ChevronRight,
} from "lucide-react";

import WebLogo from "../horizon/WebLogo";
import { Tournament_request, T_ProfileBar } from "../../pages/STUDIO/index";
import TournamentCard from "../../pages/TOURNAMENT_DETAILS/TournamentCard";
import NotificationPOPUP from "../../pages/STUDIO/Notification";
import userService from "../../service/user.service";

function DashboardStat({ icon, label, value, hint }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
            <div className="mb-3 flex items-center justify-between gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300">
                    {icon}
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Live
                </span>
            </div>

            <p className="text-2xl font-black tracking-tight text-white">{value}</p>
            <p className="mt-1 text-xs font-semibold text-slate-400">{label}</p>

            {hint && <p className="mt-2 text-[11px] text-slate-500">{hint}</p>}
        </div>
    );
}

function SectionHeader({ icon, title, subtitle, action }) {
    return (
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                    {icon}
                </div>

                <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.18em] text-slate-200">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-1 text-xs font-medium text-slate-500">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {action}
        </div>
    );
}

function Studio() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [requestData, setRequestData] = useState({ documents: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const requests = requestData?.documents || [];

    const pendingCount = useMemo(() => {
        return requests.filter(
            (item) => String(item?.status || "").toLowerCase() === "pending"
        ).length;
    }, [requests]);

    async function getRequest() {
        try {
            setLoading(true);
            setError("");

            const res = await userService.getMyRequest();

            if (res) {
                setRequestData({
                    ...res,
                    documents: Array.isArray(res.documents) ? res.documents : [],
                });
            }
        } catch (error) {
            console.error("Error at Studio fetching requests:", error);
            setError("Unable to load your latest studio responses.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getRequest();
    }, []);

    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-[#030712] text-slate-100 selection:bg-cyan-400/20 ">
            {/* Premium Background */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.20),transparent_28%),radial-gradient(circle_at_top_left,rgba(79,70,229,0.16),transparent_30%),linear-gradient(180deg,#030712_0%,#06111f_45%,#030712_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[42px_42px]" />
            </div>

            {/* Notification Drawer */}
            <AnimatePresence>
                {isNotificationOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsNotificationOpen(false)}
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md " 
                        />

                        <motion.aside
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 320, damping: 32 }}
                            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#07111f]/95 shadow-[0_0_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
                        >
                            <div className="border-b border-white/10 p-5">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <div className="mb-2 flex items-center gap-2">
                                            <div className="grid h-9 w-9 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                                                <Bell size={18} />
                                            </div>

                                            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                                                Studio Inbox
                                            </span>
                                        </div>

                                        <h2 className="text-lg font-black tracking-tight text-white">
                                            Responses & Logs
                                        </h2>
                                        <p className="mt-1 text-xs text-slate-500">
                                            Tournament request updates, approvals and system messages.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setIsNotificationOpen(false)}
                                        className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/[0.08] hover:text-white active:scale-95"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                                    {requests.length} Total Messages
                                </p>

                                <button
                                    type="button"
                                    onClick={getRequest}
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-300 transition hover:bg-white/[0.08] hover:text-white active:scale-95"
                                >
                                    <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                                    Refresh
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-5">
                                {loading ? (
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((item) => (
                                            <div
                                                key={item}
                                                className="h-36 animate-pulse rounded-3xl border border-white/10 bg-white/[0.04]"
                                            />
                                        ))}
                                    </div>
                                ) : error ? (
                                    <div className="flex h-64 flex-col items-center justify-center rounded-3xl border border-red-400/10 bg-red-500/[0.04] p-6 text-center">
                                        <AlertCircle size={28} className="mb-3 text-red-300" />
                                        <p className="text-sm font-bold text-red-200">{error}</p>
                                        <button
                                            type="button"
                                            onClick={getRequest}
                                            className="mt-4 rounded-2xl bg-red-400 px-4 py-2 text-xs font-black text-[#06111f]"
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                ) : requests.length > 0 ? (
                                    <div className="flex flex-col gap-4">
                                        {requests.map((element, index) => (
                                            <motion.div
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.04 }}
                                                key={element.$id || index}
                                            >
                                                <NotificationPOPUP data={element} />
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex h-64 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-center">
                                        <div className="mb-4 grid h-14 w-14 place-items-center rounded-3xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300">
                                            <Gamepad2 size={26} />
                                        </div>

                                        <h3 className="text-base font-black text-white">
                                            No responses yet
                                        </h3>
                                        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                                            When your tournament request gets reviewed, updates will appear here.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 relative top-25">
                {/* Top Bar */}
                <header className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/[0.035] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex min-w-0 items-center gap-4">
                        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl border border-white/10 bg-[#030712] shadow-inner sm:h-20 sm:w-20">
                            <WebLogo className="h-12 w-12 sm:h-16 sm:w-16" />
                        </div>

                        <div className="min-w-0">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
                                    Creator Console
                                </span>

                                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                    <Sparkles size={12} className="text-cyan-300" />
                                    InfenEra Studio
                                </span>
                            </div>

                            <h1 className="truncate text-2xl font-black tracking-tight text-white sm:text-4xl">
                                Build. Host. Control.
                            </h1>

                            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
                                Manage tournament requests, profile setup, live matches and studio responses from one premium dashboard.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                        <button
                            type="button"
                            onClick={() => setIsNotificationOpen(true)}
                            className="relative inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-slate-200 transition hover:border-cyan-400/25 hover:bg-cyan-400/10 hover:text-cyan-200 active:scale-95"
                        >
                            <Bell size={17} />
                            Responses

                            {requests.length > 0 && (
                                <span className="ml-1 rounded-full bg-cyan-300 px-2 py-0.5 text-[10px] font-black text-[#06111f]">
                                    {requests.length}
                                </span>
                            )}

                            {pendingCount > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
                                </span>
                            )}
                        </button>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black text-[#06111f] shadow-[0_18px_45px_rgba(34,211,238,0.18)] transition hover:bg-cyan-200 active:scale-95"
                        >
                            <Plus size={17} />
                            Host Tournament
                        </button>
                    </div>
                </header>

                {/* Stats Row */}
                <section className="grid gap-4 md:grid-cols-3">
                    <DashboardStat
                        icon={<Activity size={19} />}
                        label="Studio Requests"
                        value={requests.length}
                        hint="All tournament requests sent from your account."
                    />

                    <DashboardStat
                        icon={<Clock size={19} />}
                        label="Pending Review"
                        value={pendingCount}
                        hint="Requests waiting for approval or response."
                    />

                    <DashboardStat
                        icon={<ShieldCheck size={19} />}
                        label="Studio Status"
                        value="Active"
                        hint="Your studio account is ready for hosting."
                    />
                </section>

                {/* Main Studio Panel */}
                <section className="rounded-[30px] border border-white/10 bg-[#07111f]/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-5">
                    <SectionHeader
                        icon={<Trophy size={18} />}
                        title="Tournament Studio"
                        subtitle="Complete your host setup and manage your request pipeline."
                        action={
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-black text-slate-300 transition hover:bg-white/[0.08] hover:text-white active:scale-95"
                            >
                                Studio Guide
                                <ChevronRight size={15} />
                            </button>
                        }
                    />

                    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                            <Tournament_request />
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                            <T_ProfileBar />
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="overflow-hidden rounded-[30px] border border-cyan-400/10 bg-cyan-400/[0.055] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                                Ready To Go Live?
                            </p>
                            <h2 className="mt-2 text-xl font-black tracking-tight text-white">
                                Start your next competitive tournament.
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-slate-400">
                                Create a clean request, add match details, and track approval inside Studio.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#06111f] transition hover:bg-cyan-100 active:scale-95"
                        >
                            Get Started
                            <ChevronRight size={17} />
                        </button>
                    </div>
                </section>

                {/* Live Matches */}
                <section className="rounded-[30px] border border-white/10 bg-[#07111f]/70 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-5">
                    <SectionHeader
                        icon={<Gamepad2 size={18} />}
                        title="Active Live Matches"
                        subtitle="Your live tournament feed and match cards."
                    />

                    <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                        <TournamentCard />
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Studio;