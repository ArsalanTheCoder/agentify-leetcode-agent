'use client';

import React, { useEffect } from 'react';
import { useAppContext } from './context/AppContext.js';
import SplashPage from '../components/Pages/SplashPage.jsx';
import AuthForms from '../components/Auth/AuthForms.jsx';
import OnboardingPage from '../components/Pages/OnboardingPage.jsx';
import MainAppContainer from '../components/Layout/MainAppContainer.jsx';
import GithubIntegrationView from '../components/App/GithubIntegrationView.jsx';

const AppContent = () => {
    const { appState, setAppState } = useAppContext();

    useEffect(() => {
        if (appState === 'splash') {
            const timer = setTimeout(() => setAppState('auth'), 3000);
            return () => clearTimeout(timer);
        }
    }, [appState, setAppState]);

    const renderContent = () => {
        switch (appState) {
            case 'splash':
                return <SplashPage />;
            case 'auth':
                return <AuthForms onLoginSuccess={() => setAppState('onboarding')} />;
            case 'onboarding':
                return <OnboardingPage onFinish={() => setAppState('githubSetup')} />;
            case 'githubSetup':
                 return <MainAppContainer isGithubSetup={true}><GithubIntegrationView onConnected={() => setAppState('main')} /></MainAppContainer>;
            case 'main':
                return <MainAppContainer />;
            default:
                return <SplashPage />;
        }
    };

    return <>{renderContent()}</>;
};

export default function Home() {
    return <AppContent />;
}