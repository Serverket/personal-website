import Layout from '/components/index';
import {ThemeProvider} from '/components/layout/themeC';
import Background from '/components/layout/bg';
import Toggle from '/components/layout/themeT';
import Hero from '/components/layout/hero';

export default function IndexPage() {
  return (
    <>
      {/*The layout has to contain every section from the site */}
      <Layout pageTitle="Serverket - DevWeb"/>
      <ThemeProvider>
      <Background>
      <Hero />
      <Toggle />
      </Background>
      </ThemeProvider>
    </>
  );
}