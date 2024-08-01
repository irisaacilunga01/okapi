// pages/auth/signin.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Redirige l'utilisateur après une connexion réussie
      window.location.href = "/dashboard";
    } else {
      const data = await response.json();
      setError(data.error);
    }
  };

  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-screen justify-center">
      <div className="flex items-center justify-center h-screen">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Se connecter</h1>
            <p className="text-balance text-muted-foreground">
              Entrer vos informations pour vous connecter
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <Button type="submit" className="w-full">
              Connecter
            </Button>
            <span className="ml-auto inline-block text-sm">
              Guest-House-OKAPI
            </span>
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <Image
          src="/okapi-portrait.jpg"
          alt="Image"
          width="1250"
          height="928"
          className="h-full w-full object-cover dark:brightness-[0.4]"
        />
        <h1 className="text-6xl absolute bottom-0 right-0 left-0 uppercase font-bold justify-center text-green-700 flex gap-2">
          <span className="text-red-700">Guest</span> House{" "}
          <span className="text-blue-700">OKAPI</span>
        </h1>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export default function Login() {
//   return (
//     <div className="w-full lg:grid  lg:grid-cols-2 h-screen justify-center">
//       <div className="flex items-center justify-center h-screen">
//         <div className="mx-auto grid w-[350px] gap-6">
//           <div className="grid gap-2 text-center">
//             <h1 className="text-3xl font-bold">Se connecter</h1>
//             <p className="text-balance text-muted-foreground">
//               Entrer vos informations pour vous connecter
//             </p>
//           </div>
//           <div className="grid gap-4">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Mot de passe</Label>
//               </div>
//               <Input id="password" type="password" required />
//             </div>
//             <Button type="submit" className="w-full">
//               Connecter
//             </Button>
//             <span className="ml-auto inline-block text-sm">
//               Guest-House-OKAPI
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="hidden bg-muted lg:block relative">
//         <Image
//           src="/okapi-portrait.jpg"
//           alt="Image"
//           width="1250"
//           height="928"
//           className="h-full w-full object-cover dark:brightness-[0.4]"
//         />
//         <h1 className="text-6xl absolute bottom-0 right-0 left-0 uppercase font-bold justify-center text-green-700 flex gap-2">
//           <span className="text-red-700">Guest</span> House{" "}
//           <span className="text-blue-700">OKAPI</span>
//         </h1>
//       </div>
//     </div>
//   );
// }
