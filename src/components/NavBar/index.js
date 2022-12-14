import React from "react";

export default function NavBar() {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mt-3">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li className="mr-2">
          <a
            href="#"
            className="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
            aria-current="page"
          >
            Main
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            Inspect
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            Augment
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            Label Management
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            Sequence Label
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            Details
          </a>
        </li>
        {/* <li>
          <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
            Disabled
          </a>
        </li> */}
      </ul>
    </div>
  );
}