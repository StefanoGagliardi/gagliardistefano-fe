// Import core
import { IAppLinkHref } from '@interfaces/appLinkHref';
import Link, { LinkProps } from 'next/link';
import { ParsedUrlQuery, ParsedUrlQueryInput } from 'querystring';
import React, { FC, PropsWithChildren, ReactElement } from 'react';
import {
  format as formatUrl,
  URL,
  parse as parseUrl,
  UrlObject,
  Url,
} from 'url';

// Helper function
const useLocale = () => 'it';

/**
 * Normalize given IAppLinkHref data into a INormalizedLinkProps and returns it
 *
 * @since 1.0.0
 */
function normalizeLinkHref(data: IAppLinkHref): INormalizedLinkProps {
  const result = typeof data === 'string' ? { href: data } : data;

  return {
    ...result,
    href: normalizeHref(result.href),
    as: normalizeHref(result.as || result.href),
  };
}

/**
 * Normalize given href | url object into a INormalizedUrlObject and returns it
 *
 * @since 1.0.0
 */
export function normalizeHref(href: string | UrlObject): INormalizedUrlObject {
  const result = {
    ...parseUrl(typeof href === 'string' ? href : formatUrl(href), true),
  } as Partial<Url> & { query: ParsedUrlQuery };

  delete result.host;
  delete result.href;
  delete result.path;
  delete result.search;

  result.query = result.query || {};

  return result;
}

function baseUrl(url: string): string {
  if (/^\/([^/]|$)/.test(url)) {
    return `${process.env.basePath}${url}`;
  }

  return url;
}

/**
 * Script start
 */
type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
type INormalizedUrlObject = Omit<UrlObject, 'query'> & {
  query: ParsedUrlQueryInput;
};
type INormalizedLinkProps = Omit<LinkProps, 'href' | 'as'> & {
  href: INormalizedUrlObject;
  as: INormalizedUrlObject;
};
interface AppLinkProps extends PropsWithChildren<AnchorProps> {
  href?: IAppLinkHref;
  anchor?: boolean;
  children?: any;
}
function AppLink(props: AppLinkProps) {
  const { href, children, anchor = false, ...anchorProps } = props;

  // const locale = useLocale();
  const data = normalizeLinkHref(href || '');

  // Check if link is external
  const isExternal = !!data.href.hostname;
  const hasPath = !!data.href.pathname;
  // Check of hash of js
  const onlyHash = formatUrl(data.href).startsWith('#');
  const onlyJs = formatUrl(data.href).startsWith('javasrcript');

  // Return link tag "a" without nextJs "Link" component
  if (isExternal || anchor || onlyHash || onlyJs) {
    let anchorHref;

    if (!isExternal && hasPath) {
      // data.href = addLocale(data.href, locale);
      anchorHref = baseUrl(formatUrl(data.href));
    } else {
      anchorHref = formatUrl(data.href);
    }

    return (
      <a href={anchorHref} {...anchorProps}>
        {children}
      </a>
    );
  }

  // Return internal link
  return (
    <Link {...data}>
      <a {...anchorProps}>{children}</a>
    </Link>
  );
}

export default AppLink;
