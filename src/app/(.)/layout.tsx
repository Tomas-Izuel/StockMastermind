import Aside from "@/components/common/Aside";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-white">
      <aside className="flex flex-col h-screen w-fit p-10 bg-white text-black">
        <Aside />
      </aside>

      {children}
    </div>
  );
}
