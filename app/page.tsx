"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {<div className="min-h-screen bg-white scroll-smooth">
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" className="text-xl font-semibold text-gray-900">
        Patrick Gray
      </a>
      <div className="flex gap-8">
        <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
          Work
        </a>
        <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
          Services
        </a>
        <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
          About
        </a>
        <a href="#contact" className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          Book a Call
        </a>
      </div>
    </div>
  </nav>

  <section
  id="hero"
  className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
  style={{
    /* Main background - Soft gradient from blue-gray to light gray */
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)'
  }}
>
  {/* Background Pattern - Grid lines for subtle texture */}
  <div
    className="absolute inset-0 opacity-90"
    style={{
      backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
      backgroundSize: '60px 60px'
    }}
  />
  
  {/* Background Accent - Large decorative circle top right */}
  <div 
    className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl"
    style={{ backgroundColor: 'rgba(148, 163, 184, 0.25)' }}
  />
  
  {/* Background Accent - Large decorative circle bottom left */}
  <div 
    className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
    style={{ backgroundColor: 'rgba(203, 213, 225, 0.2)' }}
  />
  
  {/* Content Container - Ensures content appears above background */}
  <div className="max-w-5xl mx-auto text-center relative z-10">
    <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 shadow-sm">
      Dashboard Design & Frontend Implementation
    </div>
    
    <p className="text-lg text-gray-600 mb-4">
      For development teams who don't have time for the tedious work
    </p>
    
    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
      Stop wasting up to 70% of dev time
      <br />
      on styling and layouts.
      <br />
      <span className="text-gray-400">I'll handle the "look and feel"</span>
    </h1>
    
    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
      Get production-ready dashboard designs with clean HTML/CSS code and 
      fully interactive prototypes—so your developers can focus on functionality, 
      not perfecting spacing and colors.
    </p>
    
    <div className="flex gap-4 justify-center flex-wrap">
      <a 
        href="#portfolio" 
        className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 text-lg shadow-lg"
      >
        See Demos
        <span>→</span>
      </a>
      <a 
        href="#contact" 
        className="px-8 py-4 border-2 border-gray-900 text-gray-900 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-lg shadow-lg"
      >
        <span>📅</span>
        Book a Call
      </a>
    </div>
  </div>
</section>

  <section id="portfolio" className="py-32 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl mb-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Check Out My Work!
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Interactive prototypes designed for demo purposes only.
        </p>
      </div>

{/* ========================
    Saas Analytics Demo Work
    ========================
*/}

      <div className="space-y-24">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
            <img src="/saasdemo.png" alt="SaaS Analytics Dashboard" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            <a href="https://honey-dart-33085396.figma.site/" target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg flex items-center gap-2 text-sm font-medium text-gray-900 hover:bg-white transition-colors shadow-lg">
              <span>🖱️</span>
              View Prototype
            </a>
          </div>

          <div className="p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              SaaS Analytics Dashboard
            </h3>

            <div className="mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <em>
                  This project is an interactive demo designed to showcase my design and prototyping skills. It is not connected to a real client or real company data.
                </em>
              </p>
            </div>


            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                The Problem
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                A 25-person startup was burning developer hours perfecting chart layouts and spacing instead of building core features. They needed a polished analytics interface fast.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                What I Designed
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Complete analytics dashboard with data visualization, filtering, user management, and reporting—delivered with clean HTML/CSS and an interactive prototype developers could click through.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Used For
              </h4>
              <p className="text-lg text-gray-700">
                Development handoff and stakeholder demos
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                Interactive Prototype
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                HTML/CSS Included
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                Dev Handoff
              </span>
            </div>
          </div>
        </div>

{/* =============================
    Internal Operations Demo Work
    =============================
*/}

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
            <img src="/internalopsdemo.png" alt="Internal Operations Tool" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            <a href="https://final-double-07029637.figma.site" target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg flex items-center gap-2 text-sm font-medium text-gray-900 hover:bg-white transition-colors shadow-lg">
              <span>🖱️</span>
              View Prototype
            </a>
          </div>

          <div className="p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Internal Operations Tool
            </h3>

            <div className="mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <em>
                  This project is an interactive demo designed to showcase my design and prototyping skills. It is not connected to a real client or real company data.
                </em>
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                The Problem
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                An operations team needed a custom tool to manage workflows, but their dev team was stuck tweaking UI instead of building business logic.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                What I Designed
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Full operations dashboard with task management, status tracking, team assignments, and notifications. Every interaction was prototyped so developers knew exactly how each element should behave.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Used For
              </h4>
              <p className="text-lg text-gray-700">
                Internal tool development
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                Internal Tool
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                Workflow Design
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                Code Ready
              </span>
            </div>
          </div>
        </div>

{/* ================================
    EcoBottle Startup Website Design
    ================================
*/}

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
            <img src="/EcoBottleDemo.png" alt="E-commerce Admin Panel" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            <a href="https://cold-peak-98199882.figma.site/" target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg flex items-center gap-2 text-sm font-medium text-gray-900 hover:bg-white transition-colors shadow-lg">
              <span>🖱️</span>
              View Prototype
            </a>
          </div>

          <div className="p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              EcoBottle Startup Company Website
            </h3>

            <div className="mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <em>
                  This project is an interactive demo designed to showcase my design and prototyping skills. It is not connected to a real client or real company data.
                </em>
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                The Problem
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                EcoBottle, a sustainable water bottle startup, wanted a clean, modern website to showcase their products. They had great ideas for the business but needed help translating their vision into a polished, consistent design.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                What I Designed
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Designed a polished, modern website for EcoBottle and provided their developers with ready-to-use code files, helping them save time on styling, layouts, and visual consistency while bringing their sustainable brand online quickly.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Used For
              </h4>
              <p className="text-lg text-gray-700">
                Establishing EcoBottle’s online store, showcasing products, and speeding up front-end development.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                E-Commerce Website
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                Product Showcase
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                Production Ready
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                Developer-Ready Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl mb-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Services
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Specialized UI/UX design services that bridge design and development
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-20">
        <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-colors">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Dashboard Mockups
          </h3>
          <p className="text-gray-600">Data-focused interfaces with clear hierarchy and user flows</p>
        </div>
        
        <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-colors">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            SaaS UI Design
          </h3>
          <p className="text-gray-600">Complete application interfaces ready for development handoff</p>
        </div>
        
        <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-colors">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Internal Tools & Admin Panels
          </h3>
          <p className="text-gray-600">Functional dashboards for operations, analytics, and management</p>
        </div>
        
        <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-colors">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            UX Flows
          </h3>
          <p className="text-gray-600">User journey mapping and interaction design</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            What You Get
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-700 text-sm">✓</span>
              </div>
              <span className="text-gray-700">Clean, reusable code files prepared to accelerate development</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-700 text-sm">✓</span>
              </div>
              <span className="text-gray-700">Fully interactive prototype (not just screenshots)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-700 text-sm">✓</span>
              </div>
              <span className="text-gray-700">Responsive layouts</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-700 text-sm">✓</span>
              </div>
              <span className="text-gray-700">Component-based design system</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-700 text-sm">✓</span>
              </div>
              <span className="text-gray-700">Annotations and handoff documentation</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-700 text-sm">✓</span>
              </div>
              <span className="text-gray-700">Dev-ready specs</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            What's NOT Included
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-700 text-sm">✕</span>
              </div>
              <span className="text-gray-700">Backend logic or server code</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-700 text-sm">✕</span>
              </div>
              <span className="text-gray-700">Database integration or setup</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-700 text-sm">✕</span>
              </div>
              <span className="text-gray-700">API development or endpoint connections</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-700 text-sm">✕</span>
              </div>
              <span className="text-gray-700">Full deployment to production URLs</span>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-6 leading-relaxed">
            I focus on cutting out the tedious "look and feel" work so your 
            developers can focus on functionality. For backend needs, your dev 
            team handles that—or I can recommend partners.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="about" className="py-32 px-6 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-gray-900 mb-12">
        About
      </h2>

      <div className="space-y-12">
        <div>
          <p className="text-2xl text-gray-700 leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold text-gray-900">Patrick Gray</span>.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            I help development teams stop wasting time on the tedious parts of dashboard 
            design—perfecting spacing, choosing color schemes, tweaking layouts—so they 
            can focus on what actually matters: building functionality.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border-l-4 border-gray-900">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            My Design Philosophy
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Your dashboard isn't just a tool—it's a marketing asset. When the design 
            is intuitive, polished, and user-friendly, it becomes something users 
            <em> want</em> to use.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Take Mint vs. Quicken. Both provided the same core functionality: track 
            spending, show budgets, provide financial insights. But Quicken had a 
            cluttered dashboard with confusing hierarchy and a dated UI. Mint's founder 
            focused on user-centric design—modern, simple, tailored to regular people. 
            The result? Mint grew 4x larger than Quicken.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            That's the power of good design. I bring that same thinking to your dashboards.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Why Work With Me
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4 text-2xl">
                ⚡
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Faster Than Competitors
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Leveraging AI-powered design tools, I deliver state-of-the-art 
                dashboards in a fraction of the time—without sacrificing quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4 text-2xl">
                💬
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                No Telephone Game
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Working solo means your goals never get lost in translation. You 
                talk to me, I build it. No middlemen, no miscommunication.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4 text-2xl">
                👁️
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Developer-Friendly Prototypes
              </h4>
              <p className="text-gray-600 leading-relaxed">
                I don't just hand you screenshots. My interactive prototypes show 
                exactly how every element behaves—developers tell me it's a game-changer.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border-l-4 border-gray-900">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Who I Work Best With
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            My ideal clients are growing companies (10-100 employees) who are recently 
            funded or scaling quickly. They don't have a dedicated design team, and 
            their developers are spending too much time on styling instead of building 
            features.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you've ever thought "we need something presentable for stakeholders" or 
            "engineering is blocked without clearer UI direction"—we should talk.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Flexible to Your Needs
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I can be as creative or as structured as you need. Some clients want 
            my input and design recommendations—others have a defined vision and 
            just need execution. Either way, I adapt to fit your workflow and 
            deliver exactly what you need.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" className="py-32 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Let's Talk About Your Dashboard
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to save your team hundreds of hours? Let's discuss your project.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Fastest Ways to Reach Me
            </h3>
            
            <a href="mailto:your@email.com" className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors mb-4 group">
              <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors text-2xl">
                📧
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  Email Me
                </h4>
                <p className="text-gray-600 mb-2">
                  Best for detailed project briefs
                </p>
                <p className="text-gray-900 font-medium">patrickfoster.gray@gmail.com</p>
              </div>
            </a>

            <a href="https://calendly.com/patrickfoster-gray/30min" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
              <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors text-2xl">
                📅
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  Book a Call
                </h4>
                <p className="text-gray-600 mb-2">
                  Let's discuss your project in detail
                </p>
                <p className="text-gray-900 font-medium">Schedule 30 min →</p>
              </div>
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-semibold text-gray-900 mb-2">
              Typical Turnaround
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most dashboard projects: 1-2 weeks from kickoff to delivery
            </p>
            <h4 className="font-semibold text-gray-900 mb-2">
              Current Availability
            </h4>
            <p className="text-gray-600 leading-relaxed">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Taking on new projects for [Month/Year]
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Or Send a Quick Message
          </h3>
          <form
            className="space-y-6"
            onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const formData = new FormData(form);

            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
               name: formData.get("name"),
               email: formData.get("email"),
               message: formData.get("message"),
              }),
            });

            if (res.ok) {
            alert("Message sent successfully!");
            form.reset();
          } else {
             alert("Something went wrong. Please try again.");
          }
          }}
        >

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" placeholder="Your name" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Project Details
              </label>
              <textarea id="message" name="message" required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell me about your project, timeline, and what you need help with..." />
            </div>

            <button type="submit" className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-lg">
              Send Message
              <span>✉️</span>
            </button>
          </form>
        </div>
      </div>

      <div className="mt-20 pt-12 border-t border-gray-200 text-center text-gray-600">
        <p>© 2026 [Your Name]. Saving dev teams time, one dashboard at a time.</p>
      </div>
    </div>
  </section>
</div>}
    </div>
  );
}

