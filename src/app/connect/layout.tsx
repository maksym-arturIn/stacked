type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function ConnectLayout({ children }: Props) {
  return (
    <main className="w-full h-full relative px-2 pb-2 sm:px-0">
      <div className="fixed top-0 right-0 z-[-1] w-full h-full bg-[url('/images/connect-bg.png')] bg-no-repeat bg-top-right" />
      {children}
    </main>
  );
}
