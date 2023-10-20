import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Modal() {
  let [question, setQuestion] = useState(1);

  return (
    <div className="mt-24 mx-auto w-full max-w-md rounded-2xl bg-white">
      <div className="flex justify-between rounded p-8">
        <Quest question={1} currentQuestion={question} />
        <Quest question={2} currentQuestion={question} />
        <Quest question={3} currentQuestion={question} />
        <Quest question={4} currentQuestion={question} />
        <Quest question={5} currentQuestion={question} />
        <Quest question={6} currentQuestion={question} />
      </div>
      <div className="px-8 pb-8">
        <div>
          <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
          <div className="mt-4 space-y-2">
            <div className="h-4 w-5/6 rounded bg-slate-100" />
            <div className="h-4 rounded bg-slate-100" />
            <div className="h-4 w-4/6 rounded bg-slate-100" />
          </div>
        </div>

        <div className="mt-10 flex justify-between">
          <button
            onClick={() => setQuestion(question < 2 ? question : question - 1)}
            className="rounded px-2 py-1 text-slate-400 hover:text-slate-700"
          >
            Back
          </button>
          <button
            onClick={() => setQuestion(question > 6 ? question : question + 1)}
            className={`${
              question > 6 ? 'pointer-events-none opacity-50' : ''
            } bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-600 active:bg-blue-700`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

function Quest({ question, currentQuestion }) {
  let status =
    currentQuestion === question
      ? 'active'
      : currentQuestion < question
      ? 'inactive'
      : 'correct';

  return (
    <motion.div animate={status} initial={status} className="relative">
      <motion.div
        transition={rippleTransition}
        variants={rippleVariants}
        className="absolute inset-0 rounded-full"
      />

      <motion.div
        variants={backgroundVariants}
        transition={backgroundTransition}
        className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-400 bg-white font-semibold text-slate-500"
      >
        <div className="relative flex items-center justify-center">
          <AnimatePresence>
            {status === 'correct' ? (
              <CheckIcon className="h-6 w-6 text-white" />
            ) : (
              <motion.span
                key="question"
                animate={{ opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="absolute"
              >
                {question}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        variants={checkIconVariants}
        transition={checkIconTransition}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

let x = 1;
const t = (v) => x * v;

let backgroundTransition = { duration: t(0.2) };
let backgroundVariants = {
  inactive: {
    background: 'var(--white)',
    borderColor: 'var(--slate-200)',
    color: 'var(--slate-400)'
  },
  active: {
    background: 'var(--white)',
    borderColor: 'var(--blue-500)',
    color: 'var(--blue-500)'
  },
  correct: {
    background: 'var(--blue-500)',
    borderColor: 'var(--blue-500)'
  }
};

let rippleTransition = {
  duration: t(0.6),
  delay: t(0.2),
  type: 'tween',
  ease: 'circOut'
};

let rippleVariants = {
  inactive: {
    background: 'var(--blue-200)'
  },
  active: {
    background: 'var(--blue-200)',
    scale: 1,
    transition: {
      duration: t(0.3),
      type: 'tween',
      ease: 'circOut'
    }
  },
  complete: {
    background: 'var(--blue-200)',
    scale: 1.25
  }
};

let checkIconTransition = {
  ease: 'easeOut',
  type: 'tween',
  delay: t(0.2),
  duration: t(0.3)
};

let checkIconVariants = {
  correct: {
    pathLength: [0, 1]
  }
};
