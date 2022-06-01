document.querySelector("button").addEventListener("click", getInfo);

async function getInfo() {
  const rapperName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://simple-rapnames-api.herokuapp.com/api/${rapperName}`
    );
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText = data.birthName;
  } catch (error) {
    console.log(error);
  }
}
