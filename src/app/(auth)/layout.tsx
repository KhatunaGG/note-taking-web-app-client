import "../globals.css";

export default function AuthLayout({
    children
}: {children: React.ReactNode}) {
    return (
        <div className="bg-[#F3F5F8] w-full min-h-screen ">
            {children}
        </div>
    )
}
