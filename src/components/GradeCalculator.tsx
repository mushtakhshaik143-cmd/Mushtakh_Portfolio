import React, { useState } from 'react';
import { Plus, Trash2, RotateCcw, Award, CheckCircle, AlertCircle } from 'lucide-react';
import { GradeSubject } from '../types';

const INITIAL_SUBJECTS: GradeSubject[] = [
  { id: '1', name: 'Problem Solving & Python', marks: 92, maxMarks: 100, credits: 4 },
  { id: '2', name: 'Web Technologies & Design', marks: 86, maxMarks: 100, credits: 3 },
  { id: '3', name: 'Engineering Mathematics I', marks: 79, maxMarks: 100, credits: 4 },
  { id: '4', name: 'Digital Logic & Architecture', marks: 84, maxMarks: 100, credits: 3 },
];

export const GradeCalculator: React.FC = () => {
  const [subjects, setSubjects] = useState<GradeSubject[]>(INITIAL_SUBJECTS);
  const [newSubName, setNewSubName] = useState('');
  const [newSubMarks, setNewSubMarks] = useState(80);

  const updateMarks = (id: string, newMarks: number) => {
    const clamped = Math.max(0, Math.min(100, Number(newMarks) || 0));
    setSubjects(prev =>
      prev.map(s => (s.id === id ? { ...s, marks: clamped } : s))
    );
  };

  const removeSubject = (id: string) => {
    if (subjects.length <= 1) return;
    setSubjects(prev => prev.filter(s => s.id !== id));
  };

  const addSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubName.trim()) return;
    const newSub: GradeSubject = {
      id: Date.now().toString(),
      name: newSubName.trim(),
      marks: Math.max(0, Math.min(100, Number(newSubMarks) || 0)),
      maxMarks: 100,
      credits: 3,
    };
    setSubjects(prev => [...prev, newSub]);
    setNewSubName('');
    setNewSubMarks(80);
  };

  const resetDefaults = () => {
    setSubjects(INITIAL_SUBJECTS);
  };

  // Calculations
  const totalScored = subjects.reduce((sum, s) => sum + s.marks, 0);
  const totalPossible = subjects.reduce((sum, s) => sum + s.maxMarks, 0);
  const percentage = totalPossible > 0 ? (totalScored / totalPossible) * 100 : 0;

  // Grade & GPA mapping (10-point scale)
  let letterGrade = 'F';
  let gpa = 0.0;
  let standing = 'Needs Improvement';
  let badgeColor = 'text-red-600 bg-red-50 dark:bg-red-950/50 dark:text-red-400 border-red-200 dark:border-red-900';

  if (percentage >= 90) {
    letterGrade = 'O (Outstanding)';
    gpa = 10.0;
    standing = 'Exemplary Performance';
    badgeColor = 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900';
  } else if (percentage >= 80) {
    letterGrade = 'A+ (Excellent)';
    gpa = 9.0;
    standing = 'First Class with Distinction';
    badgeColor = 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900';
  } else if (percentage >= 70) {
    letterGrade = 'A (Very Good)';
    gpa = 8.0;
    standing = 'First Class';
    badgeColor = 'text-indigo-700 bg-indigo-50 dark:bg-indigo-950/50 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900';
  } else if (percentage >= 60) {
    letterGrade = 'B+ (Good)';
    gpa = 7.0;
    standing = 'Above Average';
    badgeColor = 'text-blue-700 bg-blue-50 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-900';
  } else if (percentage >= 50) {
    letterGrade = 'B (Above Average)';
    gpa = 6.0;
    standing = 'Pass';
    badgeColor = 'text-amber-700 bg-amber-50 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-900';
  } else if (percentage >= 40) {
    letterGrade = 'C (Pass)';
    gpa = 5.0;
    standing = 'Satisfactory';
    badgeColor = 'text-amber-700 bg-amber-50 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-900';
  } else {
    letterGrade = 'F (Re-appear)';
    gpa = 0.0;
    standing = 'Below Minimum Passing Threshold';
    badgeColor = 'text-red-700 bg-red-50 dark:bg-red-950/50 dark:text-red-300 border-red-200 dark:border-red-900';
  }

  const isPassing = percentage >= 40;

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Interactive Simulator
          </span>
          <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            Live Student Grade & GPA Calculator
          </h4>
        </div>
        <button
          onClick={resetDefaults}
          className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-zinc-300 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-xs hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          title="Reset to default subjects"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Reset Demo</span>
        </button>
      </div>

      {/* Results Overview Dashboard */}
      <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Total Marks</p>
          <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-1">
            {totalScored} <span className="text-xs font-normal text-zinc-400">/ {totalPossible}</span>
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Overall Percentage</p>
          <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mt-1">
            {percentage.toFixed(1)}%
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Letter Grade</p>
          <p className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-1 truncate">
            {letterGrade.split(' ')[0]}
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">SGPA (10.0 scale)</p>
          <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-1">
            {gpa.toFixed(1)}
          </p>
        </div>
      </div>

      {/* Summary Banner */}
      <div className={`mb-6 flex items-center justify-between rounded-xl border p-3.5 text-xs font-medium ${badgeColor}`}>
        <div className="flex items-center gap-2">
          {isPassing ? <CheckCircle className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
          <span>
            <strong>Result:</strong> {letterGrade} • {standing}
          </span>
        </div>
        <span className="font-mono text-[11px] uppercase">
          {isPassing ? 'Status: Qualified' : 'Status: Retake Required'}
        </span>
      </div>

      {/* Subjects List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400 px-1">
          <span>Enrolled Subjects ({subjects.length})</span>
          <span>Score (out of 100)</span>
        </div>

        <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
          {subjects.map(sub => (
            <div
              key={sub.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-2.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  {sub.name}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1.5 flex-1 max-w-[140px] rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        sub.marks >= 75 ? 'bg-emerald-500' : sub.marks >= 50 ? 'bg-indigo-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${sub.marks}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono">{sub.marks}%</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={sub.marks}
                  onChange={e => updateMarks(sub.id, parseInt(e.target.value))}
                  className="w-16 rounded-md border border-zinc-300 px-2 py-1 text-right text-xs font-semibold text-zinc-800 focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                  aria-label={`${sub.name} marks`}
                />
                <button
                  onClick={() => removeSubject(sub.id)}
                  disabled={subjects.length <= 1}
                  className="rounded-md p-1.5 text-zinc-400 hover:text-red-500 hover:bg-zinc-100 disabled:opacity-30 dark:hover:bg-zinc-800"
                  title="Remove subject"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Subject Inline Form */}
        <form onSubmit={addSubject} className="mt-4 flex flex-wrap gap-2 pt-2">
          <input
            type="text"
            placeholder="New subject (e.g., Data Structures)"
            value={newSubName}
            onChange={e => setNewSubName(e.target.value)}
            className="flex-1 min-w-[180px] rounded-lg border border-zinc-300 px-3 py-1.5 text-xs text-zinc-800 focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Marks"
            value={newSubMarks}
            onChange={e => setNewSubMarks(parseInt(e.target.value) || 0)}
            className="w-20 rounded-lg border border-zinc-300 px-2.5 py-1.5 text-xs text-zinc-800 focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add</span>
          </button>
        </form>
      </div>
    </div>
  );
};
