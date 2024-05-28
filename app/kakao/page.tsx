'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn('kakao')}>Login with Kakao</button>
      ) : (
        <div>
          <p>Welcome, {session.user?.name}!</p>
          <p>Welcome, {session.user?.id}</p>
          <p>Welcome, {session.user?.email}</p>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      )}
    </div>
  );
}