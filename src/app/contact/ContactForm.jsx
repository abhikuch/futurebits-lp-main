"use client";

import { useFormState, useFormStatus } from "react-dom";

import { submitContact } from "./actions";

const initialState = { ok: false, errors: {}, message: "" };

const VERTICAL_OPTIONS = [
  { value: "ai", label: "AI & Automation" },
  { value: "markets", label: "Markets & Trading Systems" },
  { value: "design", label: "Design & Frontend" },
  { value: "build", label: "Build & Engineering" },
  { value: "other", label: "Something else" },
];

const BUDGET_OPTIONS = [
  { value: "unsure", label: "Not sure yet" },
  { value: "under_10k", label: "Under $10k" },
  { value: "10k_25k", label: "$10k – $25k" },
  { value: "25k_50k", label: "$25k – $50k" },
  { value: "50k_plus", label: "$50k+" },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center rounded-full bg-[#01B0EA] px-6 text-sm font-semibold text-white transition hover:bg-[#11b9ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01B0EA]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060618] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-8 text-emerald-50">
        <h2 className="font-montserrat text-2xl font-semibold">Got it.</h2>
        <p className="mt-3 text-sm leading-relaxed">
          {state.message ||
            "Thanks — your message is in. We'll reply within four working hours."}
        </p>
      </div>
    );
  }

  const errors = state.errors || {};

  return (
    <form
      action={formAction}
      className="space-y-5"
      noValidate
      aria-label="Project inquiry form"
    >
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Your name"
          required
          autoComplete="name"
          error={errors.name}
        />
        <Field
          id="email"
          label="Work email"
          type="email"
          required
          autoComplete="email"
          error={errors.email}
        />
      </div>

      <Field
        id="company"
        label="Company"
        autoComplete="organization"
        optional
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          id="vertical"
          label="What do you need?"
          options={VERTICAL_OPTIONS}
        />
        <SelectField
          id="budget"
          label="Budget range"
          options={BUDGET_OPTIONS}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white/80"
        >
          Tell us about the project <span className="text-white/40">·</span>{" "}
          <span className="text-white/50">what success looks like, timing, anything we should know</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={20}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-[#01B0EA]/40"
          placeholder="We're a 12-person fintech rolling out a new pricing engine…"
        />
        {errors.message ? (
          <p
            id="message-error"
            className="mt-2 text-xs text-red-300"
            role="alert"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/50">
          We'll only use this to reply about your inquiry. No newsletters, no
          retargeting.
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}

function Field({ id, label, error, optional, ...input }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white/80">
        {label}
        {optional ? (
          <span className="ml-1 text-white/40">(optional)</span>
        ) : null}
      </label>
      <input
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-[#01B0EA]/40"
        {...input}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({ id, label, options }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white/80">
        {label}
      </label>
      <select
        id={id}
        name={id}
        defaultValue={options[0].value}
        className="mt-2 h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-white/40 focus:ring-2 focus:ring-[#01B0EA]/40"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#060618]">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
