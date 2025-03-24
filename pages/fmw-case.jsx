import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";

const WorkSingle = () => {
  const [videoToggle, setVideoToggle] = useState(false);
  return (
    <Layout pageClassName={"portfolio-template"} className="p-6">
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        {/* Heading */}
        <div className="container">
          <div className="m-titles align-left">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>FundMyWish</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Full-Stack Development, UX/UI Design</span>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="v-line v-line-right v-line-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="m-details">
                  <div className="details-label">
                    <span>Year:</span>
                    <strong>
                      <span>Oct 2024– Mar 2025</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span>React, TypeScript, Node.js, PostgreSQL</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Full-Stack, UX/UI, Payments</span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://www.fundmywish.ca"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Live Preview</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4 className="text-xl font-bold">Description</h4>
              </div>
            </div>
            <div className="">
              <div className="post-content">
                <p className="text-lg">
                  <strong>FundMyWish</strong> is a cashback-based gift registry
                  platform for weddings, baby showers, and other milestones. I
                  worked as the{" "}
                  <strong>
                    sole full-stack developer and product designer
                  </strong>{" "}
                  for six months, responsible for the entire technical stack,
                  user flows, and UX.
                </p>
                <p className="text-lg">
                  The product allows users to create and share gift lists,
                  accept donations via <strong>Stripe</strong> or{" "}
                  <strong>PayPal</strong>, and manage funds via a secure
                  dashboard. I led the project from MVP to UI/UX revisions and
                  SEO optimization, all while adapting to shifting business
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Breakdown */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="post-content">
              <h4 className="text-xl font-bold">Project Breakdown</h4>

              <p className="text-lg">
                <strong>Team & Role:</strong>
                <br />
                Team of 3: Kenny (Founder), his assistant (Instagram marketing),
                and me. <br />I handled{" "}
                <strong>everything technical and product-related</strong>:
                design, frontend, backend, integrations, SEO, and product
                direction.
              </p>

              <p className="text-lg">
                <strong>Phase 1 – MVP Development (Oct–Jan):</strong>
                <br />I designed the core flow: users create wishlists → share →
                guests donate → users track funds & withdraw.
              </p>
              <ul className="list-disc pl-6 text-lg">
                <strong>Key implementations:</strong>
                <li>Auth0 login for wishlist creators</li>
                <li>Create wishlist (list with items)</li>
                <li>Public wishlist pages for guest donors (no login)</li>
                <li>Dashboard for managing lists, transactions, wallet</li>
                <li>Stripe & PayPal donation and payout integration</li>
                <li>Email receipts for donors</li>
              </ul>
              <p className="text-lg">
                I also built the <strong>Homepage</strong> and marketing pages
                like <strong>About, Blog, FAQ</strong>, with layout based on a
                reference selected by the founder.
              </p>
              <p className="text-lg">
                <strong>Phase 2 – SEO Improvements (Late Jan–Feb):</strong>
                <br />I researched SEO best practices for React/Vite.
                Implemented <strong>Static Site Generation (SSG)</strong> for
                public pages and improved metadata, page structure, and link
                previews.
              </p>
              <p className="text-lg">
                <strong>
                  Phase 3 – Rebranding & UX Shift (Late Feb–March):
                </strong>
                <br />A new branding advisor brought a fresh strategy: more
                personalized target, compete with traditional wedding registry
                with cashback gap, Instagram ad funnel, and vendor partnerships.
              </p>
              <ul className="list-disc pl-6 text-lg">
                <strong>I redesigned and shipped:</strong>
                <li>A new “Wedding Poster” landing page</li>
                <li>Streamlined signup → wishlist creation flow</li>
                <li>
                  Template, popular items-based wedding and baby registries
                  creating process
                </li>
              </ul>
              <p className="text-lg">
                I sourced and adapted a new HTML homepage template to match the
                new branding before the project was paused due to sudden funding
                loss.
              </p>

              <p className="text-lg">
                <strong>Tech Stack:</strong>
                <br />
                <span className="block mt-1">
                  Frontend: React, TypeScript, TailwindCSS, Vite, HTML
                </span>
                <br />
                <span className="block">
                  Backend: Node.js, Express, PostgreSQL (Sequelize)
                </span>
                <br />
                <span className="block">Auth: Auth0</span>
                <br />
                <span className="block">
                  Payments: Paypal, credit card, Google, Apple Pay. (use Stripe
                  & PayPal)
                </span>
                <br />
                <span className="block">Deployment: Heroku, Vercel</span>
                <br />
                <span className="block">
                  Tools: Figma, GitHub, Postman, Webflow
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Conclusion */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="">
              <div className="post-content">
                <h4 className="text-xl font-bold">Conclusion</h4>
                <p className="text-lg">
                  This was my{" "}
                  <strong>first time leading a full-stack product</strong> from
                  scratch. I adapted to team shifts, branding pivots, and
                  handled everything from wireframes to payment systems.
                </p>
                <p className="text-lg">
                  Though the startup closed, I came out more confident in
                  managing product scope, collaborating with non-technical
                  stakeholders, and building full-stack solutions under real
                  startup pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Video */}
      <div className="section section-inner m-video-large">
        <div className="container">
          <div className="row">
            <h4>Simple Website Walkthrough Demo (no sound)</h4>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%", // 16:9 aspect ratio
                overflow: "hidden",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src="https://www.youtube.com/embed/FbesD-D68VY?si=c4YKGhEET_96OysX"
                title="FundmyWish Website Demo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkSingle;
