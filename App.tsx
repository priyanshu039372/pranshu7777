import React, { useState } from 'react';
import { BIProvider, useBI } from './context/BIContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { DashboardPage } from './pages/DashboardPage';
import { DataAnalyticsPage } from './pages/DataAnalyticsPage';
import { AIAssistantPage } from './pages/AIAssistantPage';
import { PredictiveAnalyticsPage } from './pages/PredictiveAnalyticsPage';
import { CustomerInsightsPage } from './pages/CustomerInsightsPage';
import { SmartRecommendationsPage } from './pages/SmartRecommendationsPage';
import { ReportsPage } from './pages/ReportsPage';
import { SettingsPage } from './pages/SettingsPage';

const MainContent: React.FC = () => {
  const { activeTab } = useBI();
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderActivePage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />;
      case 'analytics':
        return <DataAnalyticsPage />;
      case 'assistant':
        return <AIAssistantPage />;
      case 'predictive':
        return <PredictiveAnalyticsPage />;
      case 'customers':
        return <CustomerInsightsPage />;
      case 'recommendations':
        return <SmartRecommendationsPage />;
      case 'reports':
        return <ReportsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-bi-dark flex text-slate-100 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72">
        {/* Header Bar */}
        <Header setMobileOpen={setMobileOpen} />

        {/* Page Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
};

export function App() {
  return (
    <BIProvider>
      <MainContent />
    </BIProvider>
  );
}

export default App;
