 const heading = React.createElement("h1", {id: "heading", class: "head"}, "Vanakam da mapla react la irunthu!");

 const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "mapla vanten"),React.createElement("h2", {}, "mapla vanten 2")] ));

 console.log(parent);

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(parent);