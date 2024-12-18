const replacementMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const escapeHtml = (html: string) => {
  return html.replace(/[&<>"']/g, (value) => replacementMap[value]);
};

escapeHtml('<div class="medium">Hello, world!</div>');
// &lt;div class=&quot;medium&quot;&gt;Hello, world!&lt;/div&gt;
