const templates = [
  {
    url: "/",
    template: "/home/",
    title: "",
    description: "",
    sections: 4
  },
  {
    url: "/blog",
    template: "/blog",
    title: "blog",
    description: "",
    sections: 4,
  },
  {
    url: "/blog/*",
    template: "/article",
    title: "blog",
    description: "",
    sections: 6,
  },
  {
    url: "/polityka-prywatnosci/",
    template: "privacy",
    title: "Polityka prywatnosci",
    description: "",
    sections: 6,
  },
]

// Render.
const pathname = window.location.pathname;
const currentTemplate = templates.find((element) => element.url.match(pathname));
render(){
  for (const s in currentTemplate.sections) {
    let res;
    try {
      res = await fetch('not-a-real-url')
    }
    catch (e) {
      console.error(e)
    }
    try {
      document.body.append(await res.text());
    }
    catch (e) {
      console.log(e);
    }
    return
  }
}
// Meta data.
//
await render();
