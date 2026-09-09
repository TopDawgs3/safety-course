"use client";

import { useState } from "react";
import Link from "next/link";
import { useProgress } from "@/context/ProgressContext";
import { media } from "@/lib/assets";

function formatDate(iso?: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/Edmonton",
    });
  } catch {
    return iso;
  }
}

export function CertificateClient() {
  const { progress, issueCertificate, ready } = useProgress();
  const [name, setName] = useState(progress.learnerName ?? "");
  const exam = progress.examResult;
  const passed = Boolean(exam?.passed);

  function handleIssue(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      alert("Please enter the learner name to appear on the certificate.");
      return;
    }
    if (!passed) {
      alert("Pass the final exam (80%+) before issuing a completion certificate.");
      return;
    }
    issueCertificate(trimmed);
  }

  if (!ready) {
    return <p className="text-sm text-white/70">Loading saved progress…</p>;
  }

  const issued = Boolean(progress.certificateIssuedAt && progress.learnerName);

  return (
    <div className="mx-auto max-w-phone space-y-6 px-3 pb-28 pt-4">
      <div className="rounded-2xl border border-amber-400/40 bg-amber-50 p-4 text-sm text-amber-950">
        <p className="font-bold">Educational certificate only</p>
        <p className="mt-1">
          This is a Victoria School of the Arts / Victoria Phoenix school
          learning certificate for{" "}
          <strong>Cook Apprenticeship (CKA) / Food Safety</strong>. It is{" "}
          <strong>not</strong> an official AHS food handler certificate and is{" "}
          <strong>not</strong> legal advice.
        </p>
      </div>

      {!passed && (
        <div className="rounded-2xl border border-white/10 bg-white p-4 text-sm text-phoenix-ink">
          <p className="font-semibold">Final Reels Challenge required</p>
          <p className="mt-1 text-phoenix-gray">
            Pass the{" "}
            <Link className="font-semibold text-phoenix-crimson underline" href="/exam/">
              final exam
            </Link>{" "}
            with at least 80% to unlock your printable Phoenix cert.
          </p>
        </div>
      )}

      {passed && (
        <form
          onSubmit={handleIssue}
          className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white p-4 no-print"
        >
          <label className="text-sm font-medium text-phoenix-ink">
            Learner name
            <input
              className="mt-1 w-full rounded-xl border border-black/15 px-3 py-2 text-phoenix-ink focus:border-phoenix-crimson focus:outline-none focus:ring-2 focus:ring-phoenix-soft"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              required
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-phoenix-crimson py-2.5 text-sm font-bold text-white"
          >
            {issued ? "Update certificate" : "Issue certificate"}
          </button>
          {issued && (
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-full border border-phoenix-crimson py-2.5 text-sm font-bold text-phoenix-crimson"
            >
              Print / Save PDF
            </button>
          )}
        </form>
      )}

      {issued && (
        <div className="certificate-sheet rounded-3xl border-4 border-phoenix-crimson bg-white p-6 text-center shadow-feed">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media("/media/vsa-phoenix-logo.png")}
            alt="Victoria Phoenix"
            className="mx-auto h-20 w-20 object-contain"
          />
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-phoenix-crimson">
            Victoria School of the Arts · Victoria Phoenix
          </p>
          <h2 className="mt-2 font-display text-2xl font-black text-phoenix-ink">
            Certificate of Completion
          </h2>
          <p className="mt-1 text-xs italic text-phoenix-gray">
            Inspiring Creativity · Cook Apprenticeship (CKA) / Food Safety
          </p>
          <p className="mt-6 text-sm text-phoenix-gray">This certifies that</p>
          <p className="mt-1 text-2xl font-bold text-phoenix-ink">
            {progress.learnerName}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-phoenix-ink">
            has completed the <strong>Victoria Phoenix CKA Food Safety</strong>{" "}
            educational feed covering Alberta Food Regulation{" "}
            <strong>AR 31/2006 s.31</strong>, CKA3900 workplace safety,
            sanitation &amp; hygiene (including the 4–60°C danger zone), and
            WHMIS basics for cook apprenticeship.
          </p>
          {exam && (
            <p className="mt-3 text-sm font-semibold text-phoenix-crimson">
              Final challenge score: {exam.percent}%
            </p>
          )}
          <p className="mt-4 text-xs text-phoenix-gray">
            Issued {formatDate(progress.certificateIssuedAt)} (America/Edmonton)
          </p>
          <p className="mt-6 border-t border-black/10 pt-3 text-[10px] leading-relaxed text-phoenix-gray">
            Educational school resource only. Not an official Alberta Health
            Services food handler / sanitation and hygiene certificate. Not
            legal advice.
          </p>
        </div>
      )}

      <Link href="/feed/" className="block text-center text-sm font-semibold text-white/70 no-print">
        ← Back to feed
      </Link>
    </div>
  );
}
