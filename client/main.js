const msgsDiv = document.getElementById('msgs');
let data;
const getData = async () => {
  try {
    const jsonData = await fetch('http://localhost:1212/api/msg/');
    data = await jsonData.json();
    const html = renderData(data.data);
    msgsDiv.innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};
getData();

function renderData(msgs) {
  msgs.reverse();
  let html = msgs
    .map(msg => {
      const date = new Date(msg.createdAt).toLocaleString();
      return `
        <h1>${msg.name}</h1>
        <h5>${msg.msg}</h5>
        <small>${date}</small>
        `;
    })
    .join('');

  return html;
}
