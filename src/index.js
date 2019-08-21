import Header from "./Header";
const h = new Header({
  destiny: "#app",
  data: {
    tag: "h1",
    title: "Hola"
  }
});

h.render();

h.update({ title: "Adios" });
