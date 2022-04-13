import React from 'react';

function Example() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mx-4 my-4">
        <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
            </span>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
        </p>
        <div className="group flex items-center">
            <img className="shrink-0 h-12 w-12 rounded-full" src="..." alt="" />
            <div className="ltr:ml-3 rtl:mr-3">
                <p className="text-sm font-medium text-slate-300 group-hover:text-white">...</p>
                <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300">...</p>
            </div>
        </div>
    </div>

  );
}

export default Example;
