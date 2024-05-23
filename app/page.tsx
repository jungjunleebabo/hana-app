import { redirect } from "next/navigation";
import "@/lib/db";

export default function Home() {
   // 클라이언트 측 리디렉션
   if (typeof window !== 'undefined') {
    redirect('/login');
  }

  // 서버 사이드 리디렉션
  redirect('/login');
  
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      redirect("/login");
    </div>
  );
}