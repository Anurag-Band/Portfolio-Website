import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen w-full bg-primary-bg-color text-primary-text-color overflow-hidden">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
