import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.div<{ active?: boolean }>`
  cursor: pointer;
  margin: 0 5px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;

const Pagination: React.FC<PaginationProps> = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <PageNumber
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageNumber>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
