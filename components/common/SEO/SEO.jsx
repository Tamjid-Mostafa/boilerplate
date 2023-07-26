import Head from 'next/head'
import { FC, Fragment, ReactNode } from 'react'
import config from '@config/seo_meta.json'

const portfolioUrl = 'tamjid.netlfy.app'
const portfolioBaseUrl = portfolioUrl ? `https://${portfolioUrl}` : null



const ogImage = ({ url, width, height, alt }, index) => {
  // generate full URL for OG image url with store base URL
  const imgUrl = portfolioBaseUrl
    ? new URL(url, portfolioBaseUrl).toString()
    : url
  return (
    <Fragment key={`og:image:${index}`}>
      <meta
        key={`og:image:url:${index}`}
        property="og:image"
        content={imgUrl}
      />
      <meta
        key={`og:image:width:${index}`}
        property="og:image:width"
        content={width}
      />
      <meta
        key={`og:image:height:${index}`}
        property="og:image:height"
        content={height}
      />
      <meta
        key={`og:image:alt:${index}`}
        property="og:image:alt"
        content={alt}
      />
    </Fragment>
  )
}

const SEO = ({
  title,
  description,
  openGraph,
  robots,
  children,
}) => {
  /**
   * @see https://nextjs.org/docs/api-reference/next/head
   *
   * meta or any other elements need to be contained as direct children of the Head element,
   * or wrapped into maximum one level of <React.Fragment> or arrays
   * otherwise the tags won't be correctly picked up on client-side navigations.
   *
   * The `key` property makes the tag is only rendered once,
   */
  return (
    <Head>
      <title key="title">
        {title ? `${config.titleTemplate.replace(/%s/g, title)}` : config.title}
      </title>
      <meta
        key="description"
        name="description"
        content={description || config.description}
      />
      <meta
        key="og:type"
        property="og:type"
        content={openGraph?.type ?? config.openGraph.type}
      />
      <meta
        key="og:title"
        property="og:title"
        content={
          openGraph?.title ?? config.openGraph.title ?? title ?? config.title
        }
      />
      <meta
        key="og:description"
        property="og:description"
        content={
          openGraph?.description ??
          config.openGraph.description ??
          description ??
          config.description
        }
      />
      <meta
        key="og:site_name"
        property="og:site_name"
        content={openGraph?.site_name ?? config.openGraph.site_name}
      />
      <meta
        key="og:url"
        property="og:url"
        content={openGraph?.url ?? config.openGraph.url}
      ></meta>
      {openGraph?.locale && (
        <meta key="og:locale" property="og:locale" content={openGraph.locale} />
      )}
      {openGraph?.images?.length
        ? openGraph.images.map((img, index) => ogImage(img, index))
        : ogImage(config.openGraph.images[0], 0)}
      {config.linkedin.cardType && (
        <meta
          key="linkedin:card"
          name="linkedin:card"
          content={config.linkedin.cardType}
        />
      )}
      {config.linkedin.site && (
        <meta
          key="linkedin:site"
          name="linkedin:site"
          content={config.linkedin.site}
        />
      )}
      {config.linkedin.handle && (
        <meta
          key="linkedin:creator"
          name="linkedin:creator"
          content={config.linkedin.handle}
        />
      )}
      <meta key="robots" name="robots" content={robots ?? 'index,follow'} />
      <meta
        key="googlebot"
        name="googlebot"
        content={robots ?? 'index,follow'}
      ></meta>
      {children}
    </Head>
  )
}

export default SEO
