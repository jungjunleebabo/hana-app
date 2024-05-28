import { signIn, signOut, getSession } from 'next-auth/react';
import { redirect } from "next/navigation";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/index-page',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <div>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  );
}
