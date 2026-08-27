import React from "react";
import "./styles.css";

const features = [
  {
    icon: "edit_note",
    title: "Intelligent Notes",
    description:
      "Transform sprawling lectures into structured, bulleted insights. Missing a concept? Just ask the AI to expand.",
    type: "notes",
  },
  {
    icon: "quiz",
    title: "Adaptive Quizzes",
    description:
      "Test your knowledge with auto-generated multiple choice and short answer questions based exactly on your material.",
    type: "quiz",
  },
];

const testimonials = [
  {
    initial: "S",
    name: "Sarah J.",
    role: "Biology Major",
    text:
      "This platform completely changed how I study for my biology exams. The AI notes are spot on and save me hours of reading.",
    color: "primary",
  },
  {
    initial: "A",
    name: "Ali R.",
    role: "Engineering Student",
    text:
      "The ability to translate complex concepts between English and Urdu has made understanding difficult topics so much easier.",
    color: "secondary",
  },
  {
    initial: "M",
    name: "Maria C.",
    role: "Law Student",
    text:
      "The adaptive quizzes exposed my weak points before the actual midterms. I feel much more confident going into exams now.",
    color: "tertiary",
  },
];

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="brand-logo" href="#top">
          <Icon>menu_book</Icon>
          <span>AI Study Buddy</span>
        </a>

        <div className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#library">My Library</a>
          <a href="#planner">Study Planner</a>
        </div>

        <a className="get-started-btn" href="#get-started">
          Get Started
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-content">
        <div className="hero-badge">
          <Icon className="small-icon">auto_awesome</Icon>
          <span>Introducing Calm Tech Learning</span>
        </div>

        <h1 className="hero-title">
          Study Smarter,
          <br />
          <span className="highlight">
            Not Harder
            <svg
              className="underline"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </span>{" "}
          with AI
        </h1>

        <p className="hero-description">
          Upload your dense PDFs and textbooks. Experience instant summaries,
          adaptive quizzes, and intelligent notes designed to reduce cognitive
          load and keep you in the flow state.
        </p>

        <div className="hero-buttons">
          <a className="primary-btn" href="#get-started">
            <span>Get Started for Free</span>
            <Icon className="arrow-icon">arrow_forward</Icon>
          </a>

          <a className="secondary-btn" href="#features">
            Explore Features
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-blur"></div>

        <div className="brand-mark">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr1w4G5NH0h3L_1OjXR2mmOBnrhRJ8s6cVJ5zSfjqMNhQa-Fk-wic0WRXXTyyQYHDZn2kKhXGdKLMd0tTlAzNkFMfrYvX8Smxmb6h4jLuIJt7ZidzRdue85onlyZQ16MGrz-PtyUTxIQ1j2O_SnXOx71J66rAUMBx1sK9AQhE_w_3ebzEE-ZsL0MBlnP_hbW1Df4o9OozAdWVmEPtGwIue64-Wesz02_lAjqbQs8FMcv45nkbett9SMQ"
            alt="AI Study Buddy Logo"
          />
        </div>

        <div className="progress-card floating-card">
          <div className="progress-circle">
            <svg viewBox="0 0 36 36">
              <path
                className="progress-background"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />

              <path
                className="progress-ring"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="75, 100"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>

            <span>75%</span>
          </div>

          <div>
            <p className="card-title">Biology 101</p>
            <p className="card-subtitle">Mastery achieved</p>
          </div>
        </div>

        <div className="ai-card floating-card">
          <Icon className="ai-icon">psychology</Icon>

          <div>
            <p className="ai-title">AI Note Generation</p>

            <div className="ai-progress">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className="feature-card">
      <div className={`feature-icon ${feature.type}`}>
        <Icon>{feature.icon}</Icon>
      </div>

      <h3>{feature.title}</h3>

      <p>{feature.description}</p>

      {feature.type === "notes" && (
        <div className="notes-ui">
          <div className="skeleton skeleton-one"></div>
          <div className="skeleton skeleton-two"></div>
          <div className="skeleton skeleton-three"></div>
        </div>
      )}

      {feature.type === "quiz" && (
        <div className="quiz-preview">
          <div className="quiz-preview-bg"></div>
        </div>
      )}
    </div>
  );
}

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-container">
        <div className="section-heading">
          <h2>Powerful Tools for Deep Focus</h2>

          <p>
            Everything you need to digest complex information quickly,
            organized in a distraction-free environment.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card pdf-feature">
            <div className="pdf-content">
              <div>
                <div className="feature-icon pdf">
                  <Icon>document_scanner</Icon>
                </div>

                <h3>Instant PDF Analysis</h3>

                <p>
                  Upload any syllabus, research paper, or textbook chapter.
                  Our AI extracts key concepts, formulas, and definitions in
                  seconds, formatting them into highly readable study guides.
                </p>
              </div>

              <div className="feature-tag">
                Supports up to 100 pages
              </div>
            </div>

            <div className="pdf-preview">
              <div className="pdf-preview-image"></div>
            </div>
          </div>

          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}

          <div className="feature-card bilingual-feature">
            <div className="bilingual-content">
              <div className="feature-icon language">
                <Icon>translate</Icon>
              </div>

              <h3>Seamless Urdu &amp; English Support</h3>

              <p>
                Learn in the language you are most comfortable with. Instantly
                translate summaries, notes, and quiz questions between English
                and Urdu without losing academic context.
              </p>
            </div>

            <div className="language-box">
              <div className="language-item">
                <strong>Hello</strong>
                <span>English</span>
              </div>

              <Icon className="sync-icon">sync_alt</Icon>

              <div className="language-item">
                <strong dir="rtl">ہیلو</strong>
                <span>Urdu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: "upload_file",
      title: "1. Upload",
      text: "Drag & drop your PDFs or notes directly into the platform.",
      type: "primary",
    },
    {
      icon: "memory",
      title: "2. Analyze",
      text: "AI extracts key concepts and creates structured summaries instantly.",
      type: "secondary",
    },
    {
      icon: "school",
      title: "3. Master",
      text: "Review with flashcards, quizzes, and AI tips to retain knowledge.",
      type: "tertiary",
    },
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="section-container">
        <div className="section-heading">
          <h2>How It Works</h2>

          <p>Three simple steps to supercharge your learning.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step" key={step.title}>
              <div className={`step-icon ${step.type}`}>
                <Icon>{step.icon}</Icon>
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-container">
        <div className="section-heading">
          <h2>Trusted by Students</h2>

          <p>
            See how AI Study Buddy is changing the way people learn.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>

              <div className="user-info">
                <div className={`avatar ${testimonial.color}`}>
                  {testimonial.initial}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section" id="get-started">
      <div className="cta-box">
        <div className="cta-circle cta-circle-one"></div>
        <div className="cta-circle cta-circle-two"></div>

        <h2>Ready to transform your study routine?</h2>

        <p>
          Join thousands of students saving hours every week with AI-powered
          study sessions.
        </p>

        <a href="#top" className="cta-button">
          Get Started for Free
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              <Icon>menu_book</Icon>
              <span>AI Study Buddy</span>
            </a>

            <p>Study Smarter, Not Harder.</p>

            <div className="language-select">
              <label htmlFor="language">Language</label>

              <select id="language" defaultValue="English">
                <option value="English">English</option>
                <option value="Urdu">Urdu</option>
              </select>
            </div>
          </div>

          <div className="footer-column">
            <h4>Product</h4>

            <a href="#top">Dashboard</a>
            <a href="#features">My Library</a>
            <a href="#how-it-works">Study Planner</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>

            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div className="footer-column">
            <h4>Community</h4>

            <a href="#">Blog</a>
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 AI Study Buddy. All rights reserved.
          </span>

          <div className="footer-icons">
            <a href="#" aria-label="Share">
              <Icon>share</Icon>
            </a>

            <a href="#" aria-label="Community">
              <Icon>forum</Icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
