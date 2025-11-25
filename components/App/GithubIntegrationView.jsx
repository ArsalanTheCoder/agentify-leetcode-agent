'use client';
import React from 'react';
import GlassCard from '../UI/GlassCard';
import NeonButton from '../UI/NeonButton';
import { GithubIcon, InfoIcon } from '../../components/icons/icon.jsx';

const GithubIntegrationView = ({ onConnected }) => {
    return (
        <div className="flex items-center justify-center h-full">
            <GlassCard className="max-w-2xl w-full animate-fadeInUp">
                <div className="p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Connect Your GitHub Repository</h1>
                    <p className="text-slate-300 mb-8 text-center">Personalize your Agentify experience.</p>
                    
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 mb-6">
                        <p className="text-slate-300">
                            Paste the URL of your public solutions repository. Our advanced AI needs <strong className="text-neon-cyan">read-only access</strong> to analyze your existing code, understand your skill level, and intelligently customize your daily problem challenges.
                        </p>
                    </div>

                    <form onSubmit={(e) => {e.preventDefault(); onConnected();}}>
                        <div className="relative mb-6">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                                <GithubIcon className="w-5 h-5" />
                            </span>
                            <input
                                type="text"
                                placeholder="https://github.com/your-username/your-solutions-repo"
                                className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan outline-none transition-all"
                            />
                        </div>

                        <NeonButton type="submit" fullWidth size="lg" variant="primary">
                            Connect and Begin
                        </NeonButton>
                    </form>

                    <div className="text-center mt-6">
                        <a href="#" className="text-sm text-slate-400 hover:text-neon-cyan transition-colors flex items-center justify-center">
                            <InfoIcon className="w-4 h-4 mr-2" />
                            Why do we need your GitHub? Learn more about data privacy.
                        </a>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
};

export default GithubIntegrationView;
