# AURA BI — Enterprise AI Business Intelligence System
### B.Tech Artificial Intelligence and Machine Learning (AIML) Final-Year Capstone Project

---

## 🌟 Executive Summary

**AURA BI** is a full-stack, enterprise-grade AI Business Intelligence System designed to empower decision-makers with automated data profiling, statistical anomaly detection, natural language executive query resolution powered by **Google Gemini AI**, Holt-Winters time-series predictive forecasting, RFM customer segmentation, and downloadable multi-page executive audit reports.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, **Recharts**, **Node.js/Express**, and the **Google Gemini SDK**, this platform represents a production-ready SaaS analytics solution.

---

## 🚀 Key Modules & Capabilities

### 1. Modern SaaS UI & Responsive Dashboard
- **Dark Theme:** Deep Navy (`#080B14`, `#0E1626`), Neon Purple (`#8B5CF6`), and Cyber Blue (`#6366F1`, `#06B6D4`) accents.
- **Top Financial KPIs:**
  - **Total Revenue:** Real-time gross volume tracking with period comparison badges.
  - **Total Profit & Margin %:** Operating profit and blended margins across portfolios.
  - **Total Expenses:** Operating expenditures with variance indicators.
  - **Total Customers:** Active accounts count with acquisition rate.
  - **Monthly Growth Rate:** Compound month-over-month trajectory percentage.
  - **Performance Index:** Holistic business efficiency score (0–100).
- **Interactive Visualizations:**
  1. *Monthly Revenue Trajectory Chart* (Area Spline with gradient fill)
  2. *Profit vs. Operating Expenses Chart* (Grouped comparative bar chart)
  3. *Customer Growth Chart* (Active account acquisition over time)
  4. *Sales Performance by Category* (Interactive Donut & distribution chart)
  5. *6-Month Revenue Forecast Chart* (Historical baseline into projected revenue)

---

### 2. AI Data Analyzer (File Ingestion & Profiling)
- **Multi-Format Ingestion:** Drag-and-drop support for **CSV** (`.csv`) and **Excel** (`.xlsx`, `.xls`) datasets up to 30MB.
- **Automatic Schema Inference:** Detects numeric, categorical, and datetime columns.
- **Descriptive Statistics:** Calculates Mean, Median, Min, Max, Standard Deviation, Sum, and Unique Value cardinality per column.
- **Missing Value Audit:** Column-by-column missing row counts and health percentage.
- **Statistical Anomaly Detection:**
  - Interquartile Range (IQR) & Z-score outlier detection ($|Z| > 3.0$).
  - Negative value detection in financial columns (refunds vs errors).
  - Skewness and distribution shift alerts.
- **Interactive Data Explorer:** Search, filter by category, sort, and paginate line-item records.

---

### 3. AI Business Assistant (Grounded Gemini RAG Chatbot)
- **Context-Aware RAG Prompting:** Injects dataset metrics, top revenue products, underperforming categories, and monthly trends into Gemini's prompt.
- **Supported Conversational Queries:**
  - *"What is my total revenue and profit margin?"*
  - *"Which product generates the highest profit?"*
  - *"Why are sales decreasing in certain categories?"*
  - *"What will be my next month's revenue?"*
  - *"How can I improve business performance and reduce churn?"*
- **Enterprise Security:** API keys are managed exclusively on the backend (`GEMINI_API_KEY`) and **never exposed to client-side code**.
- **Deterministic Math Fallback:** If an API key is not configured or network connectivity is unavailable, a mathematical inference engine answers directly from exact dataset calculations without hallucinating.

---

### 4. Predictive Analytics & "What-If" Simulation
- **Time-Series Forecasting:** Implements **Holt-Winters Exponential Smoothing** combined with linear trend regression across 30, 90, and 180-day horizons.
- **Confidence Corridors:** 80% and 95% statistical confidence intervals displayed around predictions.
- **Visual Distinction:** Historical data rendered as solid lines; future forecasts rendered as glowing dashed lines.
- **Algorithmic Risk Matrix:** Evaluates expense acceleration risk, customer concentration risk, and hardware margin compression with mitigation tactics.
- **Interactive "What-If" Simulator:** Real-time sliders for *Marketing Spend Change*, *Pricing Adjustments*, and *Retention Improvements* that immediately calculate projected revenue and ROI.

---

### 5. Customer Insights & RFM Segmentation
- **Key Metrics:** Total Customers, New Customers, Returning Customers, Repeat Purchase Rate, Customer Lifetime Value (CLV), Average Order Value (AOV).
- **RFM Segmentation Matrix:**
  - **Champions:** High value, high frequency (42.5% revenue contribution).
  - **Loyal Customers:** Consistent enterprise accounts.
  - **Potential Loyalists:** Recent buyers with growth upside.
  - **At Risk:** Inactive accounts requiring retention outreach.
  - **Lost / Churned:** Historical accounts for win-back campaigns.
- **Tactical Playbooks:** Actionable strategies attached to each behavioral segment.

---

### 6. Smart Strategic Recommendations
- Categorized across 4 core operational pillars:
  - 💸 **Expense Optimization:** Eliminating idle cloud infrastructure & duplicate licensing.
  - 🚀 **High-Margin Product Expansion:** Bundling software licenses with hardware.
  - 🤝 **Customer Retention & Churn Prevention:** Automated re-engagement workflows.
  - 📈 **Sales Velocity Acceleration:** Regional hub expansion in Asia-Pacific.
- Interactive status tracker (*To Do*, *In Progress*, *Completed*) with celebration feedback.

---

### 7. Professional Reports & Multi-Page PDF Export
- Generates publication-ready executive briefing documents.
- Includes KPI scorecards, category distribution tables, top offerings, and AI executive outlook.
- **Download PDF:** High-resolution vector document generated via `jspdf` and `jspdf-autotable`.
- **Download CSV:** Clean raw dataset export.

---

### 8. System Settings & Academic Specification
- Google Gemini API key configuration and connection testing.
- Multi-currency localization: **USD ($)**, **EUR (€)**, **GBP (£)**, **INR (₹)**.
- Sample dataset switcher: Switch between *Enterprise Cloud Solutions* and *SaaS ARR & Retention*.
- B.Tech AIML Project architecture documentation.

---

## 🛠️ Tech Stack & Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    AURA BI Architecture                     │
├──────────────────────────────┬──────────────────────────────┤
│ Frontend (Port 5173)         │ Backend (Port 5000)          │
├──────────────────────────────┼──────────────────────────────┤
│ • React 19 + TypeScript      │ • Node.js + Express          │
│ • Tailwind CSS Dark Palette  │ • Google Gemini SDK          │
│ • Recharts 3.x Visualization │ • Multer & XLSX Engine       │
│ • Lucide Enterprise Icons    │ • Holt-Winters Math Engine   │
│ • jsPDF + AutoTable          │ • Outlier & IQR Detection    │
│ • Canvas Confetti            │ • RFM Segmentation Logic    │
└──────────────────────────────┴──────────────────────────────┘
```

---

## 💻 Installation & Quickstart

### Prerequisites
- Node.js **>= 20.18** (Node 22 LTS recommended)
- npm **>= 10.x**

### 1. Start the System
From the project directory (`ai-bi-system`):

```bash
# Start both backend server (Port 5000) and frontend client (Port 5173) concurrently:
npm run dev
```

Alternatively, run in separate terminals:
```bash
# Terminal 1: Backend Server
npm run server

# Terminal 2: Frontend Client
npm run client
```

### 2. Access the Application
Open your browser and navigate to:
```
http://localhost:5173
```

### 3. (Optional) Configure Google Gemini API Key
You can either:
1. Add `GEMINI_API_KEY=your_key_here` to the `.env` file in the project root, **OR**
2. Open the **Settings** page in the application and paste your key in the secure input field.

---

## 📁 Sample Datasets Included

You can immediately test file upload using the provided sample files in `samples/`:
- `samples/sample_enterprise_sales_2024.csv` (15-row enterprise tech sales dataset)
- Or click the preset dataset buttons (*Cloud & AI Solutions* or *SaaS ARR*) in the navigation bar to explore hundreds of records instantly.

---

## 🎓 Academic Submission Details
- **Project Title:** AURA BI: AI Business Intelligence System
- **Program:** Bachelor of Technology (B.Tech)
- **Specialization:** Artificial Intelligence and Machine Learning (AIML)
- **Domain:** Data Science, Predictive Modeling, Enterprise AI
