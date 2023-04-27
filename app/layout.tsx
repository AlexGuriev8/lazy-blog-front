import { NextAuthProvider } from "./providers";

import "../src/assets/styles/styles.scss";
import "./styles.scss";

type Props = {
  children?: React.ReactNode;
};

export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

const RootLayout = async ({ children }: Props) => {
  return (
    <>
      <html>
        <body>
          <NextAuthProvider>
            <main className="main">{children}</main>
          </NextAuthProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
