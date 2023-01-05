'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

interface IProps {
  [x: string]: any;
}

const AppBar = ({}: IProps): JSX.Element => {
  const { data: session } = useSession();
  console.log({ session });

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-2 ">
      <Link className="text-sky-600 hover:text-sky-700" href={'/'}>
        Home
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href={'/admin'}>
        Admin
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href={'/admin/panel'}>
        Panel
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href={'/dashboard'}>
        Dashboard
      </Link>
      <div className="ml-auto flex gap-2">
        {session?.user ? (
          <>
            <p className="text-sky-600"> {session.user.name}</p>
            <button className="text-red-500" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default AppBar;
