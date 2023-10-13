import React from "react";
import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";

const pages = async ({ params }) => {
  const { id } = params;
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === id)) return <>test</>;

  const { title, date, contentHtml } = await getPostData(id);
  //   const pubDate = getFormattedDate(date)
  return (
    <main className="px-6 pt-36 list-inside">
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </main>
  );
};

export default pages;
