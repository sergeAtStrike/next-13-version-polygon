'use client';

import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_BOOK_BY_ID } from '@/graphql/client';
import { Book } from '@/types';

type Props = {
  params: { id: string };
} & Record<string, any>;

const BookPage = ({ params }: Props) => {
  const { data, error, loading } = useQuery<{ book: Book }>(GET_BOOK_BY_ID, {
    variables: { id: params.id },
  });

  return (
    <div>
      <h2> Book Page</h2>
      <p>ID: </p>
      <div>
        {data?.book && (
          <>
            <h4>{data.book.title}</h4>
            <p>By {data.book.author}</p>
          </>
        )}
        {loading && <h4>Loading...</h4>}
        {error && <p className="text-red-600 font-bold">{error.message}</p>}
        {!!data && !data.book && <p className="text-red-600 font-bold">Book not found</p>}
      </div>
    </div>
  );
};

export default BookPage;
