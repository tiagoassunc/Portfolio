import { ThemeProvider } from "theme-ui";
import theme from "../src/theme/theme";
import { global } from "../src/sass/global.scss";
import NavHeader from "../src/components/navigation/NavHeader";
import NavConfig from "../src/components/navigation/NavConfig";
import NavUser from "../src/components/navigation/NavUser";

// import messages from "../src/lang/messages";
import { IntlProvider } from "react-intl";

const locale = "it";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} className={global}>
      {/* <IntlProvider locale={locale} messages={messages[locale]}> */}
      <div>
        <NavHeader />
        <Component {...pageProps} />
        <NavConfig />
        <NavUser />
      </div>
      {/* </IntlProvider> */}
    </ThemeProvider>
  );
}
