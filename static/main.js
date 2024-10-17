const pages = {
  "/": {
    name: "default",
    title: "Home",
    content: undefined,
  },
  "/projects": {
    name: "projects",
    title: "Personal Projects",
    content: undefined,
  },
  "/resume": {
    name: "resume",
    title: "Resume",
    content: undefined,
  },
};

/**
 * Render form content conditionally.
 * @param {string} val
 */
function renderForm(val) {
  if (pages[val] === undefined) {
    console.error(`Page ${val} does not exist.`);
    return false;
  }
  document.title = pages[val].title;
  try {
    window.history.pushState(val, "", val);
  } catch (e) {
    console.log(e);
  }

  if (!pages[val].content) {
    console.log(`Fetching content`);
    fetch(`${window.location.origin}/static/${pages[val].name}.html`).then(
      function (res) {
        res.text().then(function (txt) {
          pages[val].content = txt;
          console.log(`setting content`);

          const ele = document.getElementById("page-swappable-content");
          if (ele === null) {
            console.error("Element does not exist");
            return false;
          }
          ele.innerHTML = pages[val].content;
        });
      },
    );
  } else {
    const ele = document.getElementById("page-swappable-content");
    if (ele === null) {
      console.error("Element does not exist");
      return false;
    }
    ele.innerHTML = pages[val].content;
  }
}
console.log(window.location.pathname);
renderForm(window.location.pathname);
