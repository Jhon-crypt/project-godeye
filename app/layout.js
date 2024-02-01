import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClientJs from './components/bootstrapJs/bootstrapJs';
import "./globals.css";

export const metadata = {
  title: "God Eye",
  description: "lknknk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <BootstrapClientJs />
    </html>
  );
}
