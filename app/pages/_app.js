import "../assets/styles/global.scss";
import { StylesProvider } from "@material-ui/core";
import MainLayout from "../common/components/Layouts/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StylesProvider>
  );
}

export default MyApp;
