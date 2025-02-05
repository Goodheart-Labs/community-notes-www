"use client";

import { DocumentText, Information, Chart, ArrowDown } from "iconsax-react";

export default function Home() {
  return (
    <div className="min-h-screen grid-background">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen max-w-4xl mx-auto px-6 py-12 gap-12">
        {/* Header */}
        <header className="grid gap-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 font-display">
            Community Notes Dataset
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive dataset for understanding and predicting the
            effectiveness of community notes on social media
          </p>
        </header>

        {/* Main Content */}
        <main className="grid content-start gap-12">
          {/* Placeholder for future image */}
          <div className="aspect-[3/1] bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
            Visualization Coming Soon
          </div>

          {/* Description */}
          <div className="grid gap-6 text-slate-700">
            <section className="grid gap-4">
              <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                <Information
                  size={24}
                  variant="Bold"
                  className="text-blue-600"
                  color="currentColor"
                />
                About the Dataset
              </h2>
              <p>
                This dataset provides a unique window into the dynamics of
                community-driven content moderation. It captures tweets that
                have received community notes, whether those notes were
                ultimately displayed, and the outcomes of these interactions -
                including cases where tweets were later deleted.
              </p>
            </section>

            <section className="grid gap-4">
              <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                <DocumentText
                  size={24}
                  variant="Bold"
                  className="text-blue-600"
                  color="currentColor"
                />
                Why We Built This
              </h2>
              <p>
                Community notes represent a groundbreaking approach to
                collaborative fact-checking and content contextualization. By
                making this data publicly available, we aim to enable
                researchers, developers, and community members to better
                understand and improve the effectiveness of community-driven
                moderation systems.
              </p>
            </section>

            <section className="grid gap-4">
              <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                <Chart
                  size={24}
                  variant="Bold"
                  className="text-blue-600"
                  color="currentColor"
                />
                Applications
              </h2>
              <p>
                This dataset has numerous applications, from training prediction
                models for note visibility to analyzing content moderation
                patterns. It&apos;s particularly valuable for prediction markets
                and researchers studying the evolution of collaborative content
                moderation systems.
              </p>
            </section>
          </div>

          {/* CTA Button */}
          <div className="grid justify-center">
            <button
              className="px-8 py-4 text-white rounded-lg font-bold border-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:border-neutral-300 flex items-center gap-2"
              onClick={() => alert("Dataset coming soon!")}
            >
              <ArrowDown size={24} variant="Bold" color="white" />
              Download Dataset
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-slate-600 grid gap-2">
          <p>
            A project by{" "}
            <a
              href="https://nathanpmyoung.com"
              className="text-blue-600 hover:underline"
            >
              Nathan Young
            </a>{" "}
            and{" "}
            <a
              href="https://tone-row.com"
              className="text-blue-600 hover:underline"
            >
              Rob Gordon
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
