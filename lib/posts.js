const mockPosts = [
  {
    id: 1,
    title: "Two Forms of Pre-rendering",
    author: "Sundeep Chand",
    date: "2020-01-01",
    imgUrl:
      "https://images.unsplash.com/photo-1590278458425-6aa3912a48a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
    content: `Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

  - **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
  - **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

  Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.`,
  },
  {
    id: 2,
    title: "When to Use Static Generation v.s. Server-side Rendering",
    author: "Sundeep Chand",
    date: "2020-01-02",
    imgUrl:
      "https://images.unsplash.com/photo-1604253110629-a6b88815ddb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    content: `We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

    You can use Static Generation for many types of pages, including:

    - Marketing pages
    - Blog posts
    - E-commerce product listings
    - Help and documentation

    You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

    On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

    In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.`,
  },
];

export async function getSortedPosts() {
  return mockPosts;
}
