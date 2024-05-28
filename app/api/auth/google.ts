import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, signIn } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  
  if (session) {
    // 이미 인증된 경우, index 페이지로 리디렉션
    res.redirect('/');
    return;
  }

  // Google 로그인 프로세스를 시작하고 callback URL로 리디렉션
  await signIn('google', { callbackUrl: '/' });
};
