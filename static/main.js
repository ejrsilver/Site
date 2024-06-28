const pages = {
  default: {
    url: "/",
    title: "Home",
  },
  projects: {
    url: "/projects",
    title: "Personal Projects",
  },
  skills: {
    url: "/skills",
    title: "Skills and Experience",
  },
};

/**
 * Render form content conditionally.
 * @param {string} val
 */
function renderForm(val) {
  const ele = document.getElementById("page-swappable-content");
  if (pages[val] !== undefined && ele !== null) {
    console.log(pages[val]);
    document.title = pages[val].title;
    try {
      window.history.pushState(val, "", pages[val].url);
    } catch (e) {
      console.log(e);
    }
    ele.innerHTML = document.getElementById(val).outerHTML;
  }
}

renderForm(window.location.pathname);
