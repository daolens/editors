const editor = document.getElementById("editor");
editor.value = `DAO Name
DAO card description lorem ipsum.
#discord https://discord.gg
#twitter
#web https://dao.com
#type Social
#age 6 months
#community 1.1K
#token NA
#blockchain Ethereum
#logo something.svg
---
Some description about DAO. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, obcaecati.
# How to join?
Step 1. Buy $SUPER token from <a href="https://coinbase.com">some exchange</a>
Step 2. Join <a href="discord invite url">discord</a>
Step 3. Vote on proposals at Snapshot.
# How to start earning?
Just do itt!
`;
const refresh = () => {
  let value = editor.value;
  let lines = value.split("\n");
  let details = value.split("---\n")[1].split("\n");
  //console.log(details);
  document.getElementById("card-heading").innerHTML = lines[0].trim();
  document.getElementById("dao-details-heading").innerHTML = lines[0].trim();

  document.getElementById("card-subheading").innerHTML = lines[1].trim();
  let detailsHTML = "<h2 id='dao-details-heading'>" + lines[0].trim() + "</h2>";
  details.forEach((rawLine) => {
    let line = rawLine.trim();
    if (line.startsWith("# ")) {
      detailsHTML += "<h3>" + line.substring(2).trim() + "</h3>";
    } else {
      detailsHTML += "<p>" + line.trim() + "</p>";
    }
  });
  //console.log(detailsHTML);
  document.getElementById("dao-details").innerHTML = detailsHTML;
  document.getElementById("dao-links").innerHTML = "";

  if (lines[2].trim().split(" ")[1] != undefined) {
    document.getElementById("dao-links").innerHTML += `<a href="${lines[2]
      .trim()
      .split(" ")
      .splice(1)
      .join(" ")}"><img
                      class="dao-social-link"
                      src="/assets/Discord.svg"
                      alt=""
                  /></a>`;
  }

  if (lines[3].trim().split(" ")[1] != undefined) {
    document.getElementById("dao-links").innerHTML += `<a href="${lines[3]
      .trim()
      .split(" ")
      .splice(1)
      .join(" ")}"><img
                      class="dao-social-link"
                      src="/assets/Twitter.svg"
                      alt=""
                  /></a>`;
  }

  if (lines[4].trim().split(" ")[1] != undefined) {
    document.getElementById("dao-links").innerHTML += `<a href="${lines[4]
      .trim()
      .split(" ")
      .splice(1)
      .join(" ")}"><img
                      class="dao-social-link"
                      src="/assets/Web.svg"
                      alt=""
                  /></a>`;
  }

  document.getElementById("dao-stat-table").innerHTML = "";
  if (lines[5].trim().split(" ")[1] != undefined) {
    document.getElementById(
      "dao-stat-table"
    ).innerHTML += `<div class="dao-stat-row">
                      <div class="dao-attribute"><p>Type</p></div>
                      <div class="dao-attr-value">${lines[5]
                        .trim()
                        .split(" ")
                        .slice(1)
                        .join(" ")}</div>
                    </div>`;
  }
  if (lines[6].trim().split(" ")[1] != undefined) {
    document.getElementById(
      "dao-stat-table"
    ).innerHTML += `<div class="dao-stat-row">
                      <div class="dao-attribute"><p>DAO age</p></div>
                      <div class="dao-attr-value">${lines[6]
                        .trim()
                        .split(" ")
                        .slice(1)
                        .join(" ")}</div>
                    </div>`;
  }
  if (lines[7].trim().split(" ")[1] != undefined) {
    document.getElementById(
      "dao-stat-table"
    ).innerHTML += `<div class="dao-stat-row">
                      <div class="dao-attribute"><p>Community</p></div>
                      <div class="dao-attr-value">${lines[7]
                        .trim()
                        .split(" ")
                        .slice(1)
                        .join(" ")}</div>
                    </div>`;
  }
  if (lines[8].trim().split(" ")[1] != undefined) {
    document.getElementById(
      "dao-stat-table"
    ).innerHTML += `<div class="dao-stat-row">
                      <div class="dao-attribute"><p>Token</p></div>
                      <div class="dao-attr-value">${lines[8]
                        .trim()
                        .split(" ")
                        .slice(1)
                        .join(" ")}</div>
                    </div>`;
  }
  if (lines[9].trim().split(" ")[1] != undefined) {
    document.getElementById(
      "dao-stat-table"
    ).innerHTML += `<div class="dao-stat-row">
                      <div class="dao-attribute"><p>Blockchain</p></div>
                      <div class="dao-attr-value">${lines[9]
                        .trim()
                        .split(" ")
                        .slice(1)
                        .join(" ")}</div>
                    </div>`;
  }
  if (lines[10].trim().split(" ")[1] != undefined) {
    document.getElementById("dao-logo").src = `assets/${
      lines[10].trim().split(" ")[1]
    }`;
  }
};
refresh();

document
  .getElementById("export-button")
  .addEventListener("click", () => saveTextAsFile());
function saveTextAsFile() {
  var textToWrite = document.getElementById("editor").value;
  var textFileAsBlob = new Blob([textToWrite], { type: "text/plain" });
  let fileName = textToWrite
    .split("\n")[0]
    .trim()
    .replace(" ", "-")
    .toLowerCase();
  var fileNameToSaveAs = fileName;

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";

  downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  downloadLink.click();
}
