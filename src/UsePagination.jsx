// YourComponent.js
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Pagination from './Pagination';

const YourComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Set the total number of pages

  const Items = ["","hello", "I", "am", "full", "stack", "developer", "at", "omind", "tech", ":)"]

  const [item, setItem] = useState(Items[currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch data or perform any other action when the page changes
    setItem(Items[page])

  };

  return (
    <ChakraProvider>
      {/* Your other components */}
      <div>
        {item}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </ChakraProvider>
  );
};

export default YourComponent;
