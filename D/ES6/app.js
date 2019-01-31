const data = []
const renderData = (data) => {
  return document.getElementById("app").innerHTML = `
    <div id="list">
      <div class="item">Item1</div>      
      <div class="item">Item2</div>      
    </div>
    <div> id="actions">
      <button type="button">Delete checked</button>
      <button type="button">Mark all as checked</button>
    </div>
  `
}


renderData();