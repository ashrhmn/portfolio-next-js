import { NextPage } from "next";
import Link from "next/link";
import React from "react";

type Props = {};

const TempPage: NextPage = (props: Props) => {
  return (
    <div>
      <h1 className="text-2xl my-4">Files</h1>
      <details>
        <summary className="select-none cursor-pointer">
          Introduction to Python - MidLabTask
        </summary>
        <ul className="m-4">
          <li>
            <Link href={`/temp/python/Todo.pdf`}>
              <a className="hover:text-darkPrimary transition-colors">
                Todo.pdf
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/temp/python/Phonebook.pdf`}>
              <a className="hover:text-darkPrimary transition-colors">
                Phonebook.pdf
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/temp/python/ReserveDictionary.pdf`}>
              <a className="hover:text-darkPrimary transition-colors">
                ReserveDictionary.pdf
              </a>
            </Link>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default TempPage;
