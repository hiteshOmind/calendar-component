// Pagination.js
import React from "react";
import { Box, Button } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };


  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        Page {currentPage} of {totalPages}
      </Box>
      <Box>
        <Button
          colorScheme="gray"
          variant={currentPage === 1 ? "filled" : "outline"}
          onClick={handlePrevClick}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
        ml={4}
          onClick={handleNextClick}
          colorScheme="gray"
          variant={currentPage === totalPages ? "filled" : "outline"}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Pagination;
