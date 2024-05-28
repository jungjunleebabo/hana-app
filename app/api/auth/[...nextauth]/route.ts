import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';

// 환경 변수를 가져와서 정확한 타입으로 지정합니다.
const googleClientId: string | undefined = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret: string | undefined = process.env.GOOGLE_CLIENT_SECRET;
const naverClientId: string | undefined = process.env.NAVER_CLIENT_ID;
const naverClientSecret: string | undefined = process.env.NAVER_CLIENT_SECRET;
const kakaoClientId: string | undefined = process.env.KAKAO_CLIENT_ID;
const kakaoClientSecret: string | undefined = process.env.KAKAO_CLIENT_SECRET;

// 만약 환경 변수가 모두 정의되어 있지 않다면 에러를 throw합니다.
if (!googleClientId || !googleClientSecret || !naverClientId || !naverClientSecret || !kakaoClientId || !kakaoClientSecret) {
  throw new Error('환경 변수가 설정되지 않았습니다.');
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    NaverProvider({
      clientId: naverClientId,
      clientSecret: naverClientSecret,
    }),
    KakaoProvider({
      clientId: kakaoClientId,
      clientSecret: kakaoClientSecret,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async session({ session, token, user }) {
      // Ensure session and user objects exist before assigning properties
      if (session && session.user) {
        session.user.id = token.sub; // Assign token's subject (user ID) to session user
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Assign user ID to the token
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
