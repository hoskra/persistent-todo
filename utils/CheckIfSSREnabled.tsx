"use client";

const isSSREnabled = () => typeof window === "undefined";

function CheckIfSSREnabled({ children }: React.PropsWithChildren) {
  return !isSSREnabled() ? (
    <>{children}</>
  ) : (
    <>Can't use browser storage on the server.</>
  );
}

export default CheckIfSSREnabled;
