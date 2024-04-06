import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClientJs from './components/bootstrapJs/bootstrapJs';
import "./globals.css";
import Head from 'next/head';
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

export const metadata = {
  title: "God Eye",
  description: "lknknk",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@900&display=swap" rel="stylesheet" />
      </Head>
      <body style={{ background: "#000000" }}>
        <ClerkProvider appearance={{
          baseTheme: dark
        }}>
          {children}
        </ClerkProvider></body>
      <BootstrapClientJs />
    </html>

  );
}
