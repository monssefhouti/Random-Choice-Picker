const tags = document.querySelector(".tags");
const textAria = document.querySelector(".textaria");

textAria.focus();

//create span tags and show tags
const createTags = (inputValue) => {
  const tag = inputValue
    .split(",")
    //this action is to remove the space in the array
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tags.innerHTML = "";
  tag.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tags.appendChild(tagEl);
  });
};
const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};
//Highlight Tags
const highlightTag = (tag) => {
  tag.classList.add("highlight");
};

//unHighlight Tags
const unHighlightTag = (tag) => {
  tag.classList.remove("highlight");
};

//Select a Random Tags
const randomSelect = () => {
  const times = 20;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};
// When we click the Button Enter we start picking up
textAria.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});
