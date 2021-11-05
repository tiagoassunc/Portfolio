import { ThemeProvider } from "theme-ui";
import theme from "../src/theme/theme";
import { global } from "../src/sass/global.scss"
import NavHeader from '../src/components/navigation/NavHeader'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} className={global}>
      <div>
        <NavHeader />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
