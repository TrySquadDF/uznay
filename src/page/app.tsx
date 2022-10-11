import { MainGrid } from "../components/Grid/Catalog";
export function App() {
  return (
    <MainGrid>
      <div
        style={{
          width: "100%",
          hedigh: "100%",
          background: "blue",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          hedigh: "100%",
          background: "red",
        }}
      ></div>
    </MainGrid>
  );
}

// {
//   width: "100%",
//   height: "100%",
//   minHeight: "calc(100vh - 4.1rem)",
//   gridTemplateColumns: "300px",
// }
