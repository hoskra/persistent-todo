import CheckIfSSREnabled from "@/utils/CheckIfSSREnabled";
import NoSSRWrapper from "@/utils/NoSSRWrapper";
import RQIndexedDB from "@/utils/RQIndexedDB";
import RQLocalStorage from "@/utils/RQLocalStorage";
import { indexedDB } from "@/utils/config";
import "./globals.css";

export const metadata = {
  title: "To Do Application",
  description: "App for creating persistent to do notes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NoSSRWrapper>
          <CheckIfSSREnabled>
            {indexedDB ? (
              <RQIndexedDB>{children}</RQIndexedDB>
            ) : (
              <RQLocalStorage>{children}</RQLocalStorage>
            )}
          </CheckIfSSREnabled>
        </NoSSRWrapper>
      </body>
    </html>
  );
}
