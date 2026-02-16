// const h1 = React.createElement('h1', null, 'This is a heading created with react')
// const container = document.querySelector("#container")
// const root = ReactDOM.createRoot(container);

// root.render(h1);

const h1 = React.createElement(
  "h1",
  null,
  "This is a heading created with react",
);
const h2 = React.createElement("h1", null, "This is a h2 created with react");
const div = React.createElement("h1", null, [h1, h2]);

const root = ReactDOM.createRoot(document.querySelector("#container"));
root.render(div);
