"use client";

import { useEffect } from "react";

declare global {
  interface Window { rec_embed_js?: { load: (options: Record<string, string>) => void }; }
}

const ROOT_ID = "rec_job_listing_div";
const SCRIPT_ID = "i8is-zoho-embed-js-careers";
const STYLESHEET_ID = "i8is-zoho-embed-css-careers";

export default function ZohoCareers() {
  useEffect(() => {
    const loadJobs = () => {
      const root = document.getElementById(ROOT_ID);
      if (!root || !window.rec_embed_js?.load) return;
      root.innerHTML = "";
      window.rec_embed_js.load({ widget_id: ROOT_ID, page_name: "Careers", source: "CareerSite", site: "https://i8is.zohorecruit.ca", brand_color: "#0055FF", empty_job_msg: "No current openings" });
    };
    if (!document.getElementById(STYLESHEET_ID)) {
      const stylesheet = document.createElement("link");
      stylesheet.id = STYLESHEET_ID;
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css";
      document.head.appendChild(stylesheet);
    }
    const script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (window.rec_embed_js?.load) loadJobs();
    else if (script) script.addEventListener("load", loadJobs, { once: true });
    else {
      const embed = document.createElement("script");
      embed.id = SCRIPT_ID;
      embed.src = "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js";
      embed.async = true;
      embed.addEventListener("load", loadJobs, { once: true });
      document.body.appendChild(embed);
    }
  }, []);

  return <div className="i8isZohoCareers"><div className="embed_jobs_head embed_jobs_with_style_3"><div className="embed_jobs_head2"><div className="embed_jobs_head3"><div id={ROOT_ID} aria-live="polite"><p className="zohoLoading">Loading current opportunities…</p></div></div></div></div></div>;
}
