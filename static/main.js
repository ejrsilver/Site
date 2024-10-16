const pages = {
  default: {
    url: "/",
    title: "Home",
    content: undefined,
  },
  projects: {
    url: "/projects",
    title: "Personal Projects",
    content: undefined,
  },
  skills: {
    url: "/skills",
    title: "Skills and Experience",
    content: undefined,
  },
};

/**
 * Render form content conditionally.
 * @param {string} val
 */
function renderForm(val) {
  const ele = document.getElementById("page-swappable-content");
  if (pages[val] !== undefined && ele !== null) {
    document.title = pages[val].title;
    try {
      window.history.pushState(val, "", pages[val].url);
    } catch (e) {
      console.log(e);
    }

    if (!pages[val].content) {
      fetch(`${window.location.origin}/static/${val}.html`).then(
        function (res) {
          res.text().then(function (txt) {
            pages[val].content = txt;
            ele.innerHTML = pages[val].content;
          });
        },
      );
    } else {
      ele.innerHTML = pages[val].content;
    }
  }
}
renderForm(window.location.pathname);
