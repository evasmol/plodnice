import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
function BlogListPageMetadata(props) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}
function BlogListPageContent(props) {
  const {metadata, items, sidebar} = props;
  return (
    <BlogLayout sidebar={sidebar}>
      <p>Vítejte na rozcestníku článků. Pro snazší orientaci jsou rozděleny do tematických skupin, které Vám stručně představím:  </p>
      <div class="posts-hub">
      <div><strong><a href="/blog/tags/ne-plodnost"><img src="https://i.imgur.com/aqQ8MZB.png" />(NE)PLODNOST</a></strong></div>
      <div><strong><a href="/blog/tags/planeta-pomoci"><img src="https://i.imgur.com/qrbbYxR.png" />PALETA POMOCI</a></strong></div>
      <div><strong><a href="/blog/tags/vyzvy-pro-dusi"><img src="https://i.imgur.com/9aLgNik.png" />VÝZVY PRO DUŠI</a></strong></div>
      <div><strong><a href="/blog/tags/kontroverze"><img src="https://i.imgur.com/Gnj9E0X.png" />KONTROVERZE</a></strong></div>
      </div>
      {/* <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} /> */}
    </BlogLayout>
  );
}
export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
