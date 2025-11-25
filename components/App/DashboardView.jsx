'use client';
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import GlassCard from '../UI/GlassCard';
import NeonButton from '../UI/NeonButton';
import { FlameIcon, LoaderIcon, TrophyIcon, QuizIcon } from '../../components/icons/icon.jsx';
import MainHeader from '../Layout/MainHeader';


const SkillAnalyticsChart = () => {
    const data = [
        { subject: 'Arrays', A: 70, fullMark: 100 },
        { subject: 'Strings', A: 45, fullMark: 100 },
        { subject: 'DP', A: 30, fullMark: 100 },
        { subject: 'Graphs', A: 65, fullMark: 100 },
        { subject: 'Trees', A: 80, fullMark: 100 },
        { subject: 'Sorting', A: 90, fullMark: 100 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <defs>
                    <radialGradient id="radarGradient">
                        <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                    </radialGradient>
                </defs>
                <PolarGrid stroke="#475569" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Radar name="Skill" dataKey="A" stroke="#2dd4bf" fill="url(#radarGradient)" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

const ContributionGrid = () => {
    const squares = Array.from({ length: 119 }); // 7 * 17
    return (
        <div className="grid grid-cols-17 grid-rows-7 gap-1">
            {squares.map((_, i) => {
                // eslint-disable-next-line react-hooks/purity
                const activityLevel = Math.random();
                let colorClass = 'bg-slate-700/50';
                if (activityLevel > 0.9) colorClass = 'bg-electric-green';
                else if (activityLevel > 0.7) colorClass = 'bg-green-500/80';
                else if (activityLevel > 0.4) colorClass = 'bg-green-600/60';
                else if (activityLevel > 0.1) colorClass = 'bg-green-700/40';
                return <div key={i} className={`w-3 h-3 rounded-sm ${colorClass}`}></div>
            })}
        </div>
    );
}

const DashboardView = () => {
    return (
        <div className="space-y-6">
            <MainHeader />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Today's Problem Card */}
                <GlassCard className="lg:col-span-2">
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">Today&apos;s AI Challenge</h2>
                        <p className="text-slate-400 mb-4">Here&apos;s your recommended problem for today, tailored just for you:</p>
                        <h3 className="text-3xl font-bold text-neon-cyan mb-4">Two Sum</h3>
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-xs font-semibold px-3 py-1 bg-slate-700 rounded-full border border-slate-600">Array</span>
                            <span className="text-xs font-semibold px-3 py-1 bg-green-900/50 text-green-300 rounded-full border border-green-500/50">Easy</span>
                        </div>
                        <div className="flex justify-between items-center">
                             <div className="flex items-center space-x-2 text-slate-400">
                                <LoaderIcon className="w-5 h-5 text-yellow-400"/>
                                <span>Not Attempted</span>
                                <span className="hidden sm:inline">| Est. Time: 15-20 mins</span>
                            </div>
                            <NeonButton variant="primary">View Problem</NeonButton>
                        </div>
                    </div>
                </GlassCard>

                {/* Your Streak Card */}
                <GlassCard>
                     <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">Coding Streak</h2>
                        <div className="flex items-center mb-4">
                            <FlameIcon className="w-10 h-10 text-orange-400 mr-3" />
                            <div>
                                <p className="text-4xl font-bold">7 <span className="text-2xl text-slate-300">Days</span></p>
                            </div>
                        </div>
                        <ContributionGrid />
                    </div>
                </GlassCard>

                {/* Activity Hub Card */}
                <GlassCard>
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">Activity Hub</h2>
                        <div className="space-y-4">
                            <div className="glass-card p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <TrophyIcon className="w-6 h-6 text-yellow-400 mr-3" />
                                    <h3 className="font-semibold">Live Contest Alert</h3>
                                </div>
                                <p className="text-sm text-slate-300 mb-3">Weekly Contest #8 starts in <span className="font-bold text-neon-cyan">1d 4h 30m</span></p>
                                <NeonButton variant="secondary" size="sm" fullWidth>Register Now</NeonButton>
                            </div>
                            <div className="glass-card p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <QuizIcon className="w-6 h-6 text-accent-indigo mr-3" />
                                    <h3 className="font-semibold">Quick Quiz</h3>
                                </div>
                                <p className="text-sm text-slate-300 mb-3">Test your skills in Dynamic Programming.</p>
                                <NeonButton variant="secondary" size="sm" fullWidth>Start Quiz</NeonButton>
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Skill Analytics Card */}
                <GlassCard className="lg:col-span-2">
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h2 className="text-xl font-bold">Your Skill Blueprint</h2>
                                <span className="text-xs font-semibold px-2 py-0.5 bg-indigo-500/30 text-indigo-300 rounded-full border border-indigo-500/50">Premium Feature</span>
                            </div>
                        </div>
                        <div className="h-64 w-full">
                            <SkillAnalyticsChart />
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default DashboardView;
