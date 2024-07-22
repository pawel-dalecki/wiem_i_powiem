const templates = [
  {
    url: "/",
    template: "home",
    title: "",
    description: "",
    templates: 7,
  },
  {
    url: "/blog/g",
    template: "blog",
    title: "blog",
    description: "",
    templates: 2,
  },
  {
    url: "/blog/s*/g",
    template: "article",
    title: "blog",
    description: "",
    templates: 6,
  },
  {
    url: "/polityka-prywatnosci/g",
    template: "privacy",
    title: "Polityka prywatnosci",
    description: "",
    templates: 6,
  },
  {
    url: "/",
    template: "404",
    title: "404 - Strony nie znaleziono",
    description: "",
    templates: 2,
  },
]

// Render.
const pathname = window.location.pathname;
const currentTemplate = templates.find((element) => element.url.match(pathname)) || templates[4];
console.log(currentTemplate)
async function injectTemplate(origin, template, target, prepend) {
  try {
    const res = origin ?
      await fetch(`/public/templates/${origin}/${template}.html`)
      : await fetch(`/public/templates/${template}.html`);
    const text = await res.text();
    const doc = new DOMParser().parseFromString(text, 'text/html');
    if (target) {
      document.querySelector(target).append(...doc.children[0].querySelector("body").children);
    } else {
      if (prepend) {
        document.body.prepend(...doc.children[0].querySelector("body").children);
      } else {
        document.body.append(...doc.children[0].querySelector("body").children);
      }
    }
  } catch (err) {
    console.error('Failed to fetch page:', err);
  }
}
await injectTemplate(undefined, 'header', undefined, true);
for (let template = 1; template <= currentTemplate.templates; template++) {
  await injectTemplate(currentTemplate.template, template, "main", false)
}
await injectTemplate(undefined, 'footer', undefined, false);
