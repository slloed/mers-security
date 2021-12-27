import "../assets/styles/global.scss";
import { StylesProvider } from "@material-ui/core";
import MainLayout from "../components/common/Layouts/MainLayout";

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
