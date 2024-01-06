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
    <div className="px-48 pt-36 list-inside">
      <h1 className="text-3xl text-darkbl font-bold">{title}</h1>
      <h2 className="text-lg text-right">{getFormattedDate(date)}</h2>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
};

export default pages;
