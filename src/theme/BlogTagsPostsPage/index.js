import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
// Very simple pluralization: probably good enough for now
function useBlogPostsPlural() {
  const {selectMessage} = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.blog.post.plurals',
          description:
            'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One post|{count} posts',
        },
        {count},
      ),
    );
}
function useBlogTagsPostsPageTitle(tag) {
  const blogPostsPlural = useBlogPostsPlural();
  return translate(
    {
      id: 'theme.blog.tagTitle',
      description: 'The title of the page for a blog tag',
      message: '{nPosts} tagged with "{tagName}"',
    },
    {nPosts: blogPostsPlural(tag.count), tagName: tag.label},
  );
}
function BlogTagsPostsPageMetadata({tag}) {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_posts" />
    </>
  );
}

function getText(label) {
  const NEPLODNOST = `(NE)PLODNOST: je základní informační sekce věnovaná plodnosti a jejím poruchám. Najdete zde nejběžnější důvody, které k poruchám plodnosti vedou. Mojí snahou bude, aby články v této sekci tématicky a logicky navazovaly. Najdete zde i popis jednotlivých vyšetření, která mohou příčinu zhoršené plodnosti objasnit.`
  const PALETA = `PALETA POMOCI: má za úkol přiblížit možnosti, ze kterých neplodné páry volí, pokud se rozhodnou k řešení přizvat někoho dalšího. Své místo zde mají metody asistované reprodukce, metody podpůrné (masáže, aromaterapie, akupunktura,...), psychoterapie a další. Věřím, že se s různými formami pomoci setkáme též ve Vašich příbězích.`
  const VYZVY = `VÝZVY PRO DUŠI: neplodnost pokládám za nevyžádanou možnost k seberozvoji. Chystám sem články o oblastech našeho života, které jsou neplodností ovlivněny a o práci se sebou, která nám může v konečném důsledku pomoci nejen v řešení neplodnosti.`
  const KONTROVERZE = `KONTROVERZE: Všimla jsem si myšlenkové brzdy, která se mi aktivuje ve spojistosti s některými aspekty řešení neplodnosti, často se jedná o témata vyvolávající celospolečenskou debatu. Mými kontroverzemi čekajícími na zpracování nyní jsou: adopce jako kompenzace bezdětnosti, věk pacientek podstupujících léčbu neplodnosti, rodičovství plánované jednou osobou, dárcovství vajíček a spermií, využití náhradní matky. Předpokládám, že další témata na sebe nenechají dlouho čekat.`
  switch (label) {
    case '(ne)plodnost':
      return NEPLODNOST
    case 'paleta pomoci':
      return PALETA
    case 'výzvy pro duši':
      return VYZVY
    case 'kontroverze':
      return KONTROVERZE
  }
}

function BlogTagsPostsPageContent({tag, items, sidebar, listMetadata}) {
  const title = useBlogTagsPostsPageTitle(tag);
  const text = getText(tag.label)
  return (
    <BlogLayout sidebar={sidebar}>
      <header className="margin-bottom--xl">
        { text && <><h1>{tag.label}</h1><p>{text}</p></>}
        <p>{title}</p>

        <Link href={tag.allTagsPath}>
          <Translate
            id="theme.tags.tagsPageLink"
            description="The label of the link targeting the tag list page">
            View All Tags
          </Translate>
        </Link>
      </header>
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={listMetadata} />
    </BlogLayout>
  );
}
export default function BlogTagsPostsPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <BlogTagsPostsPageMetadata {...props} />
      <BlogTagsPostsPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
