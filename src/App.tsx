import Footer from "./components/Footer";
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col min-h-screen">
          <Component {...pageProps} />
          <Footer />
        </div>
      );
}

export default App