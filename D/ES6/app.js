let source = [
  {
    "id": "Item1",
    "label": "Item 1",
    "checked": true
  },
  {
    "id": "Item2",
    "label": "Item 2",
    "checked": false
  },
  {
    "id": "Item3",
    "label": "Item 3",
    "checked": false
  }
]
document.getElementById("app").addEventListener("click", e => {   
  if(e.target.tagName === "INPUT" && e.target.type === "checkbox") {
    let index = [...e.target.closest("#list").children].reduce((r,v,k) => v === e.target.closest(".item") ? k : r, null);
    source = source.reduce((r,v,k) => k === index ? [...r,{...v, checked: !v.checked}] : [...r,v], []);
    renderData(source);
  }
  if(e.target.classList.contains("mark-all")) {
    source = source.reduce((r,v,k) => [...r,{...v, checked: true}],[]);
    renderData(source);
  }
  if(e.target.classList.contains("reverse-all")) {
    source = source.reduce((r,v,k) => [...r,{...v, checked: !v.checked}],[]);
    renderData(source);
  }
  if(e.target.classList.contains("clear-all")) {
    source = source.reduce((r,v,k) => [...r,{...v, checked: false}],[]);
    renderData(source);
  }
  if(e.target.classList.contains("add-button") && e.target.closest(".add-to-list").querySelector("input").value !== "") {
    let el = e.target.closest(".add-to-list").querySelector("input");
    source = [...source,{"id": el.value.replace(" ",""), "label": el.value,"checked": false}];
    renderData(source);
  }
}); 

const renderData = (data) => {
  document.getElementById("app").innerHTML = `
    <div id="list">
      ${data.map(o => {
        return `<div class="item ${o.checked ? "line-through" : ""}"><input type="checkbox" ${o.checked ? "checked" : ""}/> ${o.label}</div>`
      }).join("")}
    </div>
    <div id="actions">
      <div class="add-to-list mb-2">
        <h2>Enter item</h2>
        <input type="text" />
        <button type="button" class="add-button">Add to list</button>
      </div>
      <div>
        <button type="button" class="clear-all">Clear all</button>        
        <button type="button" class="mark-all">Mark all as checked</button>
        <button type="button" class="reverse-all">Reverse all</button>
      </div>
    </div>
  `
}

renderData(source);