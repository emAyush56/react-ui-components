import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col py-8 px-4 text-gray-800">
      <h1 className="text-3xl font-semibold">React UI Components</h1>
      <ul className="mt-8 list-inside list-decimal space-y-2 text-lg underline-offset-2 transition-all">
        <li className="transition-all hover:translate-x-1 hover:text-amber-500">
          <Link to="/file-upload">File Upload</Link>
        </li>
        <li className="transition-all hover:translate-x-1 hover:text-amber-500">
          <Link to="/accordion">Accordion</Link>
        </li>
        <li className="transition-all hover:translate-x-1 hover:text-amber-500">
          <Link to="/modal">Modal</Link>
        </li>
        <li className="transition-all hover:translate-x-1 hover:text-amber-500">
          <Link to="/email-subscribe">Email Subscribe (Clone)</Link>
        </li>
      </ul>
      <footer className="mt-auto flex justify-between text-sm text-gray-400">
        <div className="credits">
          Made by{" "}
          <a
            href="https://ayush.ieyeindia.com"
            className="transition-all hover:text-amber-500"
          >
            Ayush
          </a>
        </div>
        <div className="links">
          <a
            target="_blank"
            href="https://github.com/emAyush56/react-ui-components"
            className="transition-all hover:text-amber-500"
          >
            Github Repo
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
