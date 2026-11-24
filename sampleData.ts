export interface TransactionRecord {
  id: string;
  date: string;
  customerName: string;
  customerId: string;
  category: string;
  product: string;
  quantity: number;
  unitPrice: number;
  revenue: number;
  cost: number;
  profit: number;
  region: string;
  status: 'Completed' | 'Pending' | 'Refunded';
}

export interface DatasetSummary {
  name: string;
  type: string;
  totalRecords: number;
  totalRevenue: number;
  totalProfit: number;
  totalExpenses: number;
  profitMargin: number;
  totalCustomers: number;
  newCustomers: number;
  returningCustomers: number;
  avgOrderValue: number;
  monthlyGrowthRate: number;
  monthlyTrends: {
    month: string;
    revenue: number;
    profit: number;
    expenses: number;
    customers: number;
    orders: number;
  }[];
  categoryBreakdown: {
    category: string;
    revenue: number;
    profit: number;
    orders: number;
    margin: number;
  }[];
  regionalPerformance: {
    region: string;
    revenue: number;
    orders: number;
    growth: number;
  }[];
  topProducts: {
    product: string;
    category: string;
    revenue: number;
    profit: number;
    unitsSold: number;
    margin: number;
  }[];
  rfmSegments: {
    segment: string;
    count: number;
    percentage: number;
    revenueContribution: number;
    avgSpend: number;
    action: string;
  }[];
  records: TransactionRecord[];
}

// Generate Realistic 2024-2025 E-Commerce Dataset
export function generateEcommerceDataset(): DatasetSummary {
  const categories = ['Cloud Infrastructure', 'Enterprise Software', 'AI Hardware', 'Cybersecurity', 'Developer Tools'];
  const regions = ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East'];
  const months = ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024'];
  
  const productsByCategory: Record<string, { name: string; basePrice: number; marginRate: number }[]> = {
    'Cloud Infrastructure': [
      { name: 'Aurora Elastic Compute Cluster', basePrice: 4200, marginRate: 0.38 },
      { name: 'Quantum Cloud Storage Vault', basePrice: 1800, marginRate: 0.44 },
      { name: 'Global CDN Acceleration Suite', basePrice: 2400, marginRate: 0.35 },
    ],
    'Enterprise Software': [
      { name: 'Apex ERP Financial Cloud', basePrice: 8500, marginRate: 0.52 },
      { name: 'Nexus CRM Multi-Org License', basePrice: 5400, marginRate: 0.48 },
      { name: 'Synthetix BI Enterprise Suite', basePrice: 6200, marginRate: 0.55 },
    ],
    'AI Hardware': [
      { name: 'TensorScale H200 AI Server Node', basePrice: 28500, marginRate: 0.28 },
      { name: 'EdgeMatrix Neural Accelerator', basePrice: 12400, marginRate: 0.32 },
      { name: 'OptiCluster High-Speed Fabric', basePrice: 9500, marginRate: 0.30 },
    ],
    'Cybersecurity': [
      { name: 'ZeroTrust Endpoint Guard Pro', basePrice: 3800, marginRate: 0.58 },
      { name: 'DarkTrace Threat Intelligence', basePrice: 7200, marginRate: 0.61 },
      { name: 'QuantumShield Data Encryption', basePrice: 4900, marginRate: 0.54 },
    ],
    'Developer Tools': [
      { name: 'DevMatrix CI/CD Fleet Pipeline', basePrice: 2900, marginRate: 0.46 },
      { name: 'CodeCopilot Enterprise Copilot', basePrice: 3400, marginRate: 0.50 },
      { name: 'API Gateway HyperMesh Pro', basePrice: 2100, marginRate: 0.42 },
    ]
  };

  const customerPool = [
    { name: 'Nova Dynamics Inc.', id: 'CUST-1001', loyalty: 'Champion' },
    { name: 'Helios Financial Global', id: 'CUST-1002', loyalty: 'Champion' },
    { name: 'Vanguard Biopharma', id: 'CUST-1003', loyalty: 'Loyal' },
    { name: 'Apex Logistics Corp', id: 'CUST-1004', loyalty: 'Loyal' },
    { name: 'CyberPulse Networks', id: 'CUST-1005', loyalty: 'Loyal' },
    { name: 'Aegis Aerospace', id: 'CUST-1006', loyalty: 'Potential' },
    { name: 'BlueHorizon Media', id: 'CUST-1007', loyalty: 'Potential' },
    { name: 'OmniRetail Technologies', id: 'CUST-1008', loyalty: 'At Risk' },
    { name: 'Titan Energy Solutions', id: 'CUST-1009', loyalty: 'At Risk' },
    { name: 'Solstice Capital Partners', id: 'CUST-1010', loyalty: 'Lost' },
    { name: 'Krypton Interactive Labs', id: 'CUST-1011', loyalty: 'Champion' },
    { name: 'Zenith Health Systems', id: 'CUST-1012', loyalty: 'Loyal' },
    { name: 'Hyperion Robotics', id: 'CUST-1013', loyalty: 'Potential' },
    { name: 'Cascade Cloud Systems', id: 'CUST-1014', loyalty: 'Lost' },
    { name: 'Stratum FinTech Global', id: 'CUST-1015', loyalty: 'Champion' }
  ];

  const records: TransactionRecord[] = [];
  let recordIdCounter = 1;

  // Monthly aggregated trends
  const monthlyTrends = [
    { month: 'Jan 2024', revenue: 412000, profit: 168000, expenses: 244000, customers: 1420, orders: 380 },
    { month: 'Feb 2024', revenue: 435000, profit: 178000, expenses: 257000, customers: 1490, orders: 405 },
    { month: 'Mar 2024', revenue: 480000, profit: 206000, expenses: 274000, customers: 1610, orders: 442 },
    { month: 'Apr 2024', revenue: 465000, profit: 195000, expenses: 270000, customers: 1580, orders: 430 },
    { month: 'May 2024', revenue: 520000, profit: 228000, expenses: 292000, customers: 1740, orders: 485 },
    { month: 'Jun 2024', revenue: 565000, profit: 254000, expenses: 311000, customers: 1890, orders: 512 },
    { month: 'Jul 2024', revenue: 540000, profit: 232000, expenses: 308000, customers: 1810, orders: 495 },
    { month: 'Aug 2024', revenue: 595000, profit: 273000, expenses: 322000, customers: 1980, orders: 540 },
    { month: 'Sep 2024', revenue: 630000, profit: 296000, expenses: 334000, customers: 2110, orders: 575 },
    { month: 'Oct 2024', revenue: 680000, profit: 326000, expenses: 354000, customers: 2280, orders: 620 },
    { month: 'Nov 2024', revenue: 740000, profit: 362000, expenses: 378000, customers: 2490, orders: 685 },
    { month: 'Dec 2024', revenue: 818000, profit: 412000, expenses: 406000, customers: 2740, orders: 752 },
  ];

  // Generate detailed individual records
  months.forEach((month, mIdx) => {
    const monthNum = String(mIdx + 1).padStart(2, '0');
    // Generate 25 records per month
    for (let i = 0; i < 25; i++) {
      const cat = categories[i % categories.length];
      const prodList = productsByCategory[cat];
      const prod = prodList[i % prodList.length];
      const cust = customerPool[(i + mIdx * 3) % customerPool.length];
      const reg = regions[(i + mIdx) % regions.length];
      const day = String((i % 28) + 1).padStart(2, '0');
      const date = `2024-${monthNum}-${day}`;
      const qty = (i % 4) + 1;
      const unitPrice = prod.basePrice * (1 + ((i % 5) - 2) * 0.05);
      const rev = Math.round(unitPrice * qty);
      const cost = Math.round(rev * (1 - prod.marginRate));
      const profit = rev - cost;
      const status: 'Completed' | 'Pending' | 'Refunded' = i === 24 ? 'Refunded' : (i % 12 === 0 ? 'Pending' : 'Completed');

      records.push({
        id: `TXN-${20240000 + recordIdCounter++}`,
        date,
        customerName: cust.name,
        customerId: cust.id,
        category: cat,
        product: prod.name,
        quantity: qty,
        unitPrice: Math.round(unitPrice),
        revenue: rev,
        cost,
        profit,
        region: reg,
        status
      });
    }
  });

  const totalRevenue = monthlyTrends.reduce((acc, m) => acc + m.revenue, 0);
  const totalProfit = monthlyTrends.reduce((acc, m) => acc + m.profit, 0);
  const totalExpenses = monthlyTrends.reduce((acc, m) => acc + m.expenses, 0);
  const profitMargin = Number(((totalProfit / totalRevenue) * 100).toFixed(1));

  // Category breakdown calculation
  const categoryBreakdown = [
    { category: 'Enterprise Software', revenue: 2150000, profit: 1118000, orders: 1940, margin: 52.0 },
    { category: 'AI Hardware', revenue: 1980000, profit: 594000, orders: 860, margin: 30.0 },
    { category: 'Cybersecurity', revenue: 1240000, profit: 719200, orders: 1420, margin: 58.0 },
    { category: 'Cloud Infrastructure', revenue: 980000, profit: 382200, orders: 1120, margin: 39.0 },
    { category: 'Developer Tools', revenue: 530000, profit: 243800, orders: 981, margin: 46.0 },
  ];

  // Regional breakdown
  const regionalPerformance = [
    { region: 'North America', revenue: 2880000, orders: 2540, growth: 24.5 },
    { region: 'Europe', revenue: 1950000, orders: 1780, growth: 18.2 },
    { region: 'Asia Pacific', revenue: 1320000, orders: 1310, growth: 31.8 },
    { region: 'Latin America', revenue: 450000, orders: 440, growth: 12.4 },
    { region: 'Middle East', revenue: 280000, orders: 251, growth: 15.6 },
  ];

  // Top products
  const topProducts = [
    { product: 'Synthetix BI Enterprise Suite', category: 'Enterprise Software', revenue: 940000, profit: 517000, unitsSold: 152, margin: 55.0 },
    { product: 'TensorScale H200 AI Server Node', category: 'AI Hardware', revenue: 890000, profit: 249200, unitsSold: 31, margin: 28.0 },
    { product: 'ZeroTrust Endpoint Guard Pro', category: 'Cybersecurity', revenue: 780000, profit: 452400, unitsSold: 205, margin: 58.0 },
    { product: 'Apex ERP Financial Cloud', category: 'Enterprise Software', revenue: 730000, profit: 379600, unitsSold: 86, margin: 52.0 },
    { product: 'DarkTrace Threat Intelligence', category: 'Cybersecurity', revenue: 520000, profit: 317200, unitsSold: 72, margin: 61.0 },
    { product: 'Aurora Elastic Compute Cluster', category: 'Cloud Infrastructure', revenue: 470000, profit: 178600, unitsSold: 112, margin: 38.0 },
  ];

  // RFM Customer Segments
  const rfmSegments = [
    { segment: 'Champions', count: 340, percentage: 14.8, revenueContribution: 42.5, avgSpend: 86000, action: 'Reward with executive VIP privileges & early beta access' },
    { segment: 'Loyal Customers', count: 680, percentage: 29.6, revenueContribution: 31.2, avgSpend: 31500, action: 'Upsell multi-year enterprise contracts & cross-sell AI modules' },
    { segment: 'Potential Loyalists', count: 520, percentage: 22.6, revenueContribution: 14.8, avgSpend: 19600, action: 'Offer personalized onboarding and customer success workshops' },
    { segment: 'At Risk', count: 430, percentage: 18.7, revenueContribution: 8.5, avgSpend: 13500, action: 'Launch proactive retention campaign & schedule account reviews' },
    { segment: 'Lost / Churned', count: 330, percentage: 14.3, revenueContribution: 3.0, avgSpend: 6200, action: 'Win-back discount incentive and exit survey feedback collection' },
  ];

  return {
    name: 'Enterprise Cloud & AI Solutions (2024-2025)',
    type: 'B2B Enterprise Technology',
    totalRecords: records.length,
    totalRevenue,
    totalProfit,
    totalExpenses,
    profitMargin,
    totalCustomers: 2740,
    newCustomers: 1320,
    returningCustomers: 1420,
    avgOrderValue: Math.round(totalRevenue / 6321),
    monthlyGrowthRate: 10.5,
    monthlyTrends,
    categoryBreakdown,
    regionalPerformance,
    topProducts,
    rfmSegments,
    records
  };
}

// Generate SaaS Metrics Dataset
export function generateSaaSDataset(): DatasetSummary {
  const base = generateEcommerceDataset();
  return {
    ...base,
    name: 'SaaS Subscription Metrics (Global ARR)',
    type: 'Subscription ARR & Retention'
  };
}
