let all = document.querySelectorAll(
  ".markdown-title.discussion-Link--secondary"
);
// [0].innerText

//let allText = []
for (let n of all) {
  allText.push({ title: n.innerText, href: n.href });
}

// copy(allText.map((n, index) => ({...n, index})))
