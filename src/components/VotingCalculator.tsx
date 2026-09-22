import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, UserCheck, HelpCircle } from 'lucide-react';

export const VotingCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(19);
  const [isCitizen, setIsCitizen] = useState<boolean>(true);
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  const [hasDisqualification, setHasDisqualification] = useState<boolean>(false);

  const MIN_AGE = 18;
  const isAgeValid = age >= MIN_AGE;
  const isFullyEligible = isAgeValid && isCitizen && !hasDisqualification;

  const yearsLeft = Math.max(0, MIN_AGE - age);
  const eligibleYear = 2026 + yearsLeft;

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Interactive Simulator
          </span>
          <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            Voting Eligibility & Registration Screener
          </h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>Statutory Rules Engine</span>
        </div>
      </div>

      {/* Main Verdict Card */}
      <div className="my-6">
        <div
          className={`rounded-2xl border p-5 transition-all ${
            isFullyEligible
              ? 'border-emerald-200 bg-emerald-50/70 dark:border-emerald-900/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100'
              : 'border-amber-200 bg-amber-50/70 dark:border-amber-900/60 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              {isFullyEligible ? (
                <div className="rounded-xl bg-emerald-600 p-2 text-white shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              ) : (
                <div className="rounded-xl bg-amber-600 p-2 text-white shrink-0">
                  <AlertTriangle className="h-6 w-6" />
                </div>
              )}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                  Eligibility Verdict
                </span>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {isFullyEligible
                    ? 'Qualified: Legally Eligible to Vote'
                    : 'Currently Ineligible to Vote'}
                </h3>
                <p className="mt-1 text-xs opacity-90 leading-relaxed max-w-lg">
                  {isFullyEligible
                    ? isRegistered
                      ? 'You fulfill statutory age and citizenship requirements and are registered. You may cast your vote in upcoming electoral cycles.'
                      : 'You meet all legal criteria to vote, but require voter registration / EPIC card issuance.'
                    : !isCitizen
                    ? 'Voting rights in national and state elections require recognized citizenship.'
                    : !isAgeValid
                    ? `You are under the minimum statutory voting age of 18. You will qualify in ${yearsLeft} year(s) (approx. ${eligibleYear}).`
                    : 'Disqualification criteria flagged.'}
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white/80 p-3 text-center sm:text-right shadow-xs backdrop-blur-xs dark:bg-zinc-900/80 shrink-0">
              <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Current Age</span>
              <p className="text-2xl font-black text-zinc-900 dark:text-zinc-50">{age} yrs</p>
              <span className="text-[10px] text-zinc-400">Min. Req: 18</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Age Slider & Input */}
        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="age-input" className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
              Candidate Age
            </label>
            <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
              {age} Years
            </span>
          </div>

          <input
            id="age-input"
            type="range"
            min="10"
            max="100"
            value={age}
            onChange={e => setAge(parseInt(e.target.value) || 0)}
            className="w-full accent-indigo-600 cursor-pointer"
          />

          <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400">
            <span>10 yrs (Youth)</span>
            <span className="font-semibold text-zinc-600 dark:text-zinc-300">18 yrs (Legal Line)</span>
            <span>100 yrs</span>
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Quick set:</span>
            <div className="flex gap-1.5">
              {[16, 18, 20, 25].map(v => (
                <button
                  key={v}
                  onClick={() => setAge(v)}
                  className={`rounded px-2 py-0.5 text-xs font-medium transition ${
                    age === v
                      ? 'bg-indigo-600 text-white'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Verification Checkboxes */}
        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 space-y-3">
          <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 mb-2">
            Verification Checklist
          </p>

          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={isCitizen}
              onChange={e => setIsCitizen(e.target.checked)}
              className="mt-0.5 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div>
              <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                Recognized Legal Citizen
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Holds proof of citizenship of the electoral jurisdiction.
              </p>
            </div>
          </label>

          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={isRegistered}
              onChange={e => setIsRegistered(e.target.checked)}
              className="mt-0.5 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div>
              <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                Registered on Electoral Roll (Voter ID / EPIC)
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Name is officially enrolled in the constituency voter roll.
              </p>
            </div>
          </label>

          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={hasDisqualification}
              onChange={e => setHasDisqualification(e.target.checked)}
              className="mt-0.5 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div>
              <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                Subject to Legal Disqualification
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Declared unsound mind or convicted of disqualifying electoral offenses.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Suggested Action Item */}
      <div className="mt-4 rounded-lg bg-zinc-100 p-3 text-xs text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-300">
        <span className="font-semibold text-zinc-800 dark:text-zinc-100">Next Recommended Action: </span>
        {isFullyEligible ? (
          isRegistered ? (
            <span>Locate your designated polling booth on election day and carry valid photo identity.</span>
          ) : (
            <span>Submit online enrollment (Form 6) via the official election commission portal to receive your voter card.</span>
          )
        ) : (
          <span>Review age and citizenship statutory prerequisites before submitting an electoral roll application.</span>
        )}
      </div>
    </div>
  );
};
