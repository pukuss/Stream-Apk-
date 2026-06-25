import React from "react";
import {
    Trophy,
    Wallet,
    Users,
    Swords,
    Bell,
    TrendingUp,
    Crown,
    ShieldCheck,
    Clock3,
    ArrowRight,
    Gamepad2,
    Target,
    Flame,
    CalendarDays,
    Medal,
} from "lucide-react";
import { useDispatch,useSelector } from "react-redux";
import VerifyedBadge from '../../common/Verified'



function UserOverviewPage() {
    const stats = [
        {
            title: "Tournaments Joined",
            value: "24",
            icon: <Trophy size={22} />,
            growth: "+12%",
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Total Wins",
            value: "08",
            icon: <Medal size={22} />,
            growth: "+4",
            color: "from-amber-500 to-orange-500",
        },
        {
            title: "Wallet Balance",
            value: "₹1,250",
            icon: <Wallet size={22} />,
            growth: "+₹320",
            color: "from-emerald-500 to-green-500",
        },
        {
            title: "Team Members",
            value: "05",
            icon: <Users size={22} />,
            growth: "Active",
            color: "from-purple-500 to-pink-500",
        },
    ];

    const quickActions = [
        { title: "Join Tournament", icon: <Swords size={18} /> },
        { title: "Create Team", icon: <Users size={18} /> },
        { title: "Add Money", icon: <Wallet size={18} /> },
        { title: "View Matches", icon: <Gamepad2 size={18} /> },
    ];

    const activities = [
        {
            title: "Joined BGMI Solo Battle",
            time: "2 hours ago",
            status: "Confirmed",
        },
        {
            title: "Wallet credited ₹250",
            time: "Yesterday",
            status: "Success",
        },
        {
            title: "Team invite received",
            time: "2 days ago",
            status: "Pending",
        },
    ];

    const upcomingMatches = [
        {
            game: "BGMI",
            mode: "Squad",
            time: "Today, 8:00 PM",
            prize: "₹5,000",
        },
        {
            game: "Free Fire",
            mode: "Solo",
            time: "Tomorrow, 6:30 PM",
            prize: "₹2,000",
        },
    ];

    // REDUX 
    const dispatch = useDispatch();
    const {user,profile,loading} = useSelector((state) => state.auth)
    

    return (
        <div className="min-h-screen w-full bg-slate-950 text-white p-4 md:p-6 sticky top-0">
            {/* Top Hero Section */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-950 to-black p-6 md:p-8 shadow-2xl">
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

                <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
                            <Crown size={16} />
                            User Dashboard
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black tracking-tight">
                            Welcome back,{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                {user?.name}
                            </span>
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-400">
                            Manage your tournaments, team, wallet, match activity and rewards
                            from one powerful overview panel.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-xl">
                        <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20">
                                <ShieldCheck size={30} />
                            </div>

                            <div>
                                <p className="text-sm text-slate-400">Current Rank</p>
                                <h2 className="text-2xl font-black">{profile?.rank} Player</h2>
                                <p className="text-xs text-red-600">
                                    {profile?.isVerified? ( <div className="text-emerald-400 flex gap-2 items-center">{profile.name} Verified <VerifyedBadge size={12} /></div>) : "user not Verified"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                    <div
                        key={item.title}
                        className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900"
                    >
                        <div className="flex items-center justify-between">
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${item.color} shadow-lg`}
                            >
                                {item.icon}
                            </div>

                            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                                {item.growth}
                            </span>
                        </div>

                        <h3 className="mt-5 text-3xl font-black">{item.value}</h3>
                        <p className="mt-1 text-sm text-slate-400">{item.title}</p>
                    </div>
                ))}
            </div>

            {/* Main Grid */}
            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_0.8fr]">
                {/* Left Side */}
                <div className="space-y-6">
                    {/* Performance Card */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold">Performance Overview</h2>
                                <p className="text-sm text-slate-400">
                                    Your current tournament progress
                                </p>
                            </div>

                            <TrendingUp className="text-blue-400" />
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="rounded-2xl bg-slate-950 p-4">
                                <div className="flex items-center gap-2 text-amber-400">
                                    <Flame size={18} />
                                    <span className="text-sm">Win Rate</span>
                                </div>
                                <h3 className="mt-3 text-3xl font-black">67%</h3>
                                <div className="mt-3 h-2 rounded-full bg-slate-800">
                                    <div className="h-2 w-[67%] rounded-full bg-amber-500" />
                                </div>
                            </div>

                            <div className="rounded-2xl bg-slate-950 p-4">
                                <div className="flex items-center gap-2 text-blue-400">
                                    <Target size={18} />
                                    <span className="text-sm">Accuracy</span>
                                </div>
                                <h3 className="mt-3 text-3xl font-black">82%</h3>
                                <div className="mt-3 h-2 rounded-full bg-slate-800">
                                    <div className="h-2 w-[82%] rounded-full bg-blue-500" />
                                </div>
                            </div>

                            <div className="rounded-2xl bg-slate-950 p-4">
                                <div className="flex items-center gap-2 text-emerald-400">
                                    <Trophy size={18} />
                                    <span className="text-sm">Rank Points</span>
                                </div>
                                <h3 className="mt-3 text-3xl font-black">1450</h3>
                                <div className="mt-3 h-2 rounded-full bg-slate-800">
                                    <div className="h-2 w-[72%] rounded-full bg-emerald-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Matches */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold">Upcoming Matches</h2>
                                <p className="text-sm text-slate-400">
                                    Your next scheduled battles
                                </p>
                            </div>

                            <CalendarDays className="text-purple-400" />
                        </div>

                        <div className="space-y-4">
                            {upcomingMatches.map((match) => (
                                <div
                                    key={match.game}
                                    className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-4 md:flex-row md:items-center md:justify-between"
                                >
                                    <div>
                                        <h3 className="text-lg font-bold">{match.game}</h3>
                                        <p className="text-sm text-slate-400">{match.mode}</p>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-slate-300">
                                        <Clock3 size={16} />
                                        {match.time}
                                    </div>

                                    <div className="rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-bold text-emerald-400">
                                        Prize {match.prize}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
                        <h2 className="text-xl font-bold">Quick Actions</h2>
                        <p className="text-sm text-slate-400">
                            Fast access to important features
                        </p>

                        <div className="mt-5 grid grid-cols-1 gap-3">
                            {quickActions.map((action) => (
                                <button
                                    key={action.title}
                                    className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 px-4 py-4 text-left transition-all hover:border-blue-500/50 hover:bg-blue-500/10"
                                >
                                    <span className="flex items-center gap-3 font-semibold">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                            {action.icon}
                                        </span>
                                        {action.title}
                                    </span>

                                    <ArrowRight
                                        size={18}
                                        className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-400"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold">Recent Activity</h2>
                                <p className="text-sm text-slate-400">
                                    Latest account updates
                                </p>
                            </div>

                            <Bell className="text-amber-400" />
                        </div>

                        <div className="space-y-4">
                            {activities.map((activity) => (
                                <div
                                    key={activity.title}
                                    className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="font-semibold">{activity.title}</h3>
                                            <p className="mt-1 text-xs text-slate-500">
                                                {activity.time}
                                            </p>
                                        </div>

                                        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                                            {activity.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Premium Card */}
                    <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-950 p-6 shadow-xl">
                        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-amber-400/20 blur-3xl" />

                        <div className="relative z-10">
                            <Crown className="text-amber-400" size={34} />

                            <h2 className="mt-4 text-2xl font-black">Upgrade to Elite</h2>

                            <p className="mt-2 text-sm text-slate-300">
                                Unlock premium tournaments, exclusive rewards, faster support
                                and special profile badge.
                            </p>

                            <button className="mt-5 rounded-2xl bg-amber-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-300">
                                Upgrade Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserOverviewPage;