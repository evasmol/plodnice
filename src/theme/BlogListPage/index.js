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
      <div>
      <p>Vítejte na rozcestníku článků. Pro snazší orientaci jsou rozděleny do tematických skupin, které Vám stručně představím:  </p>
      <p><strong><a href="/blog/tags/ne-plodnost">(NE)PLODNOST</a></strong>: je základní informační sekce věnovaná plodnosti a jejím poruchám. Najdete zde nejběžnější důvody, které k poruchám plodnosti vedou. Mojí snahou bude, aby články v této sekci tématicky a logicky navazovaly. Najdete zde i popis jednotlivých vyšetření, která mohou příčinu zhoršené plodnosti objasnit. </p>
      <p><strong><a href="/blog/tags/planeta-pomoci">PALETA POMOCI</a></strong>: má za úkol přiblížit možnosti, ze kterých neplodné páry volí, pokud se rozhodnou k řešení přizvat někoho dalšího.  Své místo zde mají metody asistované reprodukce, metody podpůrné (masáže, aromaterapie, akupunktura,...), psychoterapie a další. Věřím, že se s různými formami pomoci setkáme též ve Vašich příbězích. </p>
      <p><strong><a href="/blog/tags/vyzvy-pro-dusi">VÝZVY PRO DUŠI</a></strong>: neplodnost pokládám za nevyžádanou možnost k seberozvoji. Chystám sem články o oblastech našeho života, které jsou neplodností ovlivněny a o práci se sebou, která nám může v konečném důsledku pomoci nejen v řešení neplodnosti.</p>
      <p><strong><a href="/blog/tags/kontroverze">KONTROVERZE</a></strong>: Všimla jsem si myšlenkové brzdy, která se mi aktivuje ve spojistosti s některými aspekty řešení neplodnosti, často se jedná o témata vyvolávající celospolečenskou debatu. Mými kontroverzemi čekajícími na zpracování nyní jsou:  adopce jako kompenzace bezdětnosti, věk pacientek podstupujících léčbu neplodnosti, rodičovství plánované jednou osobou, dárcovství vajíček a spermií, využití náhradní matky. Předpokládám, že další témata na sebe nenechají dlouho čekat. </p>
      </div>
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
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
