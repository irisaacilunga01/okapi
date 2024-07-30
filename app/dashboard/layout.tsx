import LinkUrl from "@/components/linkUrl";
import { Users, verifyToken } from "@/lib/verification";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get("token")?.value;

  let verificationcookie: Users | null = null;
  if (tokenCookie) {
    verificationcookie = verifyToken(tokenCookie);
    console.log({ verificationcookie });

    if (verificationcookie?.role) {
      if (verificationcookie?.role == "Client") {
        redirect("/reservation");
      }
    } else {
      redirect("/login");
    }
  }
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr]">
      <LinkUrl />
      {children}
    </div>
  );
}
