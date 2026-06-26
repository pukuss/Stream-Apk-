import React, { useEffect, useMemo, useState } from "react";
import {
    AlertTriangle,
    BadgeIndianRupee,
    Bell,
    CalendarDays,
    CheckCircle2,
    Clock3,
    Gamepad2,
    Loader2,
    Mail,
    RefreshCw,
    Search,
    ShieldCheck,
    User,
    XCircle,
} from "lucide-react";

import adminService from "../../../service/admin.service";

const statusTabs = ["all", "pending", "approved", "rejected"];

function RequestPage() {
    const [error, setError] = useState(null);
    const [pageLoading, setPageLoading] = useState(true);
    const [loadingId, setLoadingId] = useState(null);
    const [request, setRequest] = useState([]);
    const [activeStatus, setActiveStatus] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    async function getAllrequest() {
        setPageLoading(true);
        setError(null);

        try {
            const res = await adminService.getRequest();
            setRequest(res?.documents || []);
            console.log("Request fetch success =>", res);
        } catch (error) {
            setError(error);
            console.log("Request fetch error =>", error);
        } finally {
            setPageLoading(false);
        }
    }

    useEffect(() => {
        getAllrequest();
    }, []);

    async function updateStatus(docId, status) {
        console.log("Doc ID:", docId);
        console.log("Status:", status);

        if (!docId || !status) {
            console.log("docId or status missing");
            return;
        }

        setLoadingId(docId);
        setError(null);

        try {
            const res = await adminService.updateRequest(docId, status);

            console.log("Updated response =>", res);

            setRequest((prev) =>
                prev.map((item) =>
                    item.$id === docId
                        ? {
                            ...item,
                            ...(res || {}),
                            status: res?.status || status,
                        }
                        : item
                )
            );
        } catch (error) {
            setError(error);
            console.log("Update status error =>", error);
        } finally {
            setLoadingId(null);
        }
    }

    const stats = useMemo(() => {
        return {
            total: request.length,
            pending: request.filter((item) => item.status === "pending").length,
            approved: request.filter((item) => item.status === "approved").length,
            rejected: request.filter((item) => item.status === "rejected").length,
        };
    }, [request]);

    const filteredRequests = useMemo(() => {
        return request.filter((item) => {
            const searchText = searchTerm.toLowerCase();

            const matchesSearch =
                item?.name?.toLowerCase().includes(searchText) ||
                item?.email?.toLowerCase().includes(searchText) ||
                item?.game?.toLowerCase().includes(searchText) ||
                item?.map?.toLowerCase().includes(searchText) ||
                item?.hostingType?.toLowerCase().includes(searchText) ||
                item?.status?.toLowerCase().includes(searchText);

            const matchesStatus =
                activeStatus === "all" ? true : item.status === activeStatus;

            return matchesSearch && matchesStatus;
        });
    }, [request, searchTerm, activeStatus]);

    return (
        <div className="min-h-screen w-full p-4 md:p-6 text-white">
            {/* Header */}
            <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Bell size={20} />
                        </div>

                        <div>
                            <h1 className="text-xl md:text-2xl font-black font-heading">
                                Request Service
                            </h1>
                            <p className="text-xs md:text-sm text-gray-400">
                                Review tournament hosting requests and update their approval
                                status.
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={getAllrequest}
                    disabled={pageLoading}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-gray-200 hover:bg-white/10 disabled:opacity-50"
                >
                    <RefreshCw size={16} className={pageLoading ? "animate-spin" : ""} />
                    Refresh
                </button>
            </header>

            {/* Hero */}
            <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-white/5 to-blue-500/10 p-6 md:p-8">
                <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-emerald-500/30 blur-3xl"></div>
                <div className="absolute -bottom-24 right-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"></div>

                <div className="relative z-10">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
                        <ShieldCheck size={14} />
                        Admin Control Panel
                    </div>

                    <h2 className="text-2xl md:text-4xl font-black font-heading">
                        Host Tournament Requests
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm text-gray-300">
                        Check host details, match date, game information, payment amount,
                        and approve or reject requests from one clean dashboard.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                <StatCard
                    title="Total Requests"
                    value={stats.total}
                    icon={<Bell size={18} />}
                    className="border-white/10 bg-white/5 text-white"
                />

                <StatCard
                    title="Pending"
                    value={stats.pending}
                    icon={<Clock3 size={18} />}
                    className="border-yellow-500/20 bg-yellow-500/10 text-yellow-300"
                />

                <StatCard
                    title="Approved"
                    value={stats.approved}
                    icon={<CheckCircle2 size={18} />}
                    className="border-green-500/20 bg-green-500/10 text-green-300"
                />

                <StatCard
                    title="Rejected"
                    value={stats.rejected}
                    icon={<XCircle size={18} />}
                    className="border-red-500/20 bg-red-500/10 text-red-300"
                />
            </section>

            {/* Search + Filter */}
            <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 lg:w-96">
                        <Search size={18} className="text-gray-500" />
                        <input
                            type="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by name, email, game, status..."
                            className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {statusTabs.map((tab) => (
                            <button
                                type="button"
                                key={tab}
                                onClick={() => setActiveStatus(tab)}
                                className={`rounded-2xl px-4 py-2 text-xs font-bold capitalize transition ${activeStatus === tab
                                        ? "bg-emerald-500 text-black"
                                        : "border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Error */}
            {error && (
                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    <AlertTriangle size={18} />
                    <p>{error?.message || "Something went wrong"}</p>
                </div>
            )}

            {/* Loading */}
            {pageLoading && (
                <div className="mt-10 flex min-h-60 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03]">
                    <div className="flex flex-col items-center gap-3 text-gray-400">
                        <Loader2 size={30} className="animate-spin text-emerald-400" />
                        <p className="text-sm font-bold">Loading requests...</p>
                    </div>
                </div>
            )}

            {/* Empty */}
            {!pageLoading && filteredRequests.length === 0 && (
                <div className="mt-10 flex min-h-60 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03]">
                    <div className="text-center">
                        <h2 className="text-xl font-black">No requests found</h2>
                        <p className="mt-1 text-sm text-gray-400">
                            Try changing search or status filter.
                        </p>
                    </div>
                </div>
            )}

            {/* Request List */}
            {!pageLoading && filteredRequests.length > 0 && (
                <main className="mt-6 flex flex-col gap-4">
                    {filteredRequests.map((product) => (
                        <article
                            key={product?.$id}
                            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-emerald-500/30 hover:bg-white/[0.06]"
                        >
                            <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr_1fr_1fr_auto] xl:items-center">
                                {/* User */}
                                <div className="flex items-start gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-300">
                                        <User size={20} />
                                    </div>

                                    <div className="min-w-0">
                                        <h2 className="truncate text-base font-black font-heading">
                                            {product?.name || "Unknown Host"}
                                        </h2>

                                        <p className="mt-1 flex items-center gap-2 truncate text-xs text-gray-400">
                                            <Mail size={13} />
                                            {product?.email || "No email"}
                                        </p>

                                        <p className="mt-1 text-xs text-gray-500">
                                            ID: {product?.$id}
                                        </p>
                                    </div>
                                    
                                    <span
                                        className={`w-fit rounded-full border px-3 py-1 text-xs font-black capitalize ${getStatusClass(
                                            product?.status
                                        )}`}
                                    >
                                        {product?.status || "pending"}
                                    </span>

                                </div>

                                {/* Match Time */}
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                                    <p className="mb-2 text-xs font-bold text-gray-500">
                                        Match Schedule
                                    </p>

                                    <div className="flex items-center gap-2 text-sm text-gray-200">
                                        <CalendarDays size={15} className="text-blue-300" />
                                        {product?.matchDate || "No date"}
                                    </div>

                                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-200">
                                        <Clock3 size={15} className="text-purple-300" />
                                        {product?.matchTime || "No time"}
                                    </div>
                                </div>

                                {/* Game */}
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                                    <p className="mb-2 text-xs font-bold text-gray-500">
                                        Game Details
                                    </p>

                                    <div className="flex items-center gap-2 text-sm text-gray-200">
                                        <Gamepad2 size={15} className="text-emerald-300" />
                                        {product?.game || "No game"}
                                    </div>

                                    <p className="mt-2 text-sm text-gray-400">
                                        Map:{" "}
                                        <span className="text-gray-200">
                                            {product?.map || "N/A"}
                                        </span>
                                    </p>
                                </div>

                                {/* Hosting + Amount */}
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                                    <p className="mb-2 text-xs font-bold text-gray-500">
                                        Hosting
                                    </p>

                                    <p className="text-sm text-gray-200">
                                        {product?.hostingType || "No type"}
                                    </p>

                                    <div className="mt-2 flex items-center gap-1 text-lg font-black text-green-300">
                                        <BadgeIndianRupee size={17} />
                                        {product?.totalAmount || 0}
                                    </div>
                                </div>

                                {/* Status + Actions */}
                                <div className="flex flex-col gap-3 xl:items-end">
                                    

                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            disabled={
                                                loadingId === product.$id ||
                                                product?.status === "approved"
                                            }
                                            onClick={() => updateStatus(product.$id, "approved")}
                                            className="flex items-center gap-2 rounded-2xl bg-green-500/10 px-4 py-2 text-xs font-black text-green-300 border border-green-500/20 hover:bg-green-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {loadingId === product.$id ? (
                                                <Loader2 size={15} className="animate-spin" />
                                            ) : (
                                                <CheckCircle2 size={15} />
                                            )}
                                            Approve
                                        </button>

                                        <button
                                            type="button"
                                            disabled={
                                                loadingId === product.$id ||
                                                product?.status === "rejected"
                                            }
                                            onClick={() => updateStatus(product.$id, "rejected")}
                                            className="flex items-center gap-2 rounded-2xl bg-red-500/10 px-4 py-2 text-xs font-black text-red-300 border border-red-500/20 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {loadingId === product.$id ? (
                                                <Loader2 size={15} className="animate-spin" />
                                            ) : (
                                                <XCircle size={15} />
                                            )}
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </main>
            )}
        </div>
    );
}

function StatCard({ title, value, icon, className }) {
    return (
        <div className={`rounded-3xl border p-4 ${className}`}>
            <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold text-gray-400">{title}</p>
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black/20">
                    {icon}
                </div>
            </div>

            <h2 className="mt-3 text-3xl font-black">{value}</h2>
        </div>
    );
}

function getStatusClass(status) {
    if (status === "approved") {
        return "border-green-500/20 bg-green-500/10 text-green-300";
    }

    if (status === "rejected") {
        return "border-red-500/20 bg-red-500/10 text-red-300";
    }

    return "border-yellow-500/20 bg-yellow-500/10 text-yellow-300";
}

export default RequestPage;