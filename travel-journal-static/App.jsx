import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";
export default function App() {
  const mainElements = data.map((item) => {
    return (
      <Main
        key={item.id}
        img={item.img}
        title={item.title}
        country={item.country}
        googleMapUrl={item.googleMapUrl}
        dates={item.dates}
        text={item.text}
      />
    );
  });
  return (
    <>
      <Header />
      {mainElements}
    </>
  );
}
