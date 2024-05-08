import MobileNav from "@/components/mobileNav";
import SideBar from "@/components/sidebar";
import Image from "next/image";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const loggedIn = { firstName: "Roland", lastName: "Komenan"}

    return (
        <main className="flex h-screen w-full font-inter">
            <SideBar user={loggedIn} />
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image
                        src="/icons/logo.svg"
                        height={30} width={30}
                        alt="logo"
                    />
                    <div>
                        <MobileNav user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>
        </main>
  );
}
