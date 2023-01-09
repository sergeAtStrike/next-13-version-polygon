'use client';

import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_BOOK_BY_ID } from '@/graphql/client';
import { Book } from '@/types';

type Props = {
  params: { id: string };
} & Record<string, any>;

/**
 * @description currently - IF using the SSG - there is a build error:
 * `Collecting page data ..ApolloError: fetch failed. Failed to collect page data for /book/[id]`
 * so temporary fall back using client side fetching.
 * apparently while using `generateStaticParams` fetch by apollo client - it fails
 * BUT it also fails using old method `getStaticPaths`, so posibly there is an error in
 * settin up the Apollo client.
 */
const BookPage = ({ params }: Props) => {
  return (
    <div>
      <h2> Book Page</h2>
      <p>ID: </p>
      <div></div>
    </div>
  );
};

export default BookPage;
