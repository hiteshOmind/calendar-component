import React, { useState } from "react";
import { ChakraProvider, Box, Center, Text } from "@chakra-ui/react";
import { FiUpload, FiEdit2 } from "react-icons/fi";

const LogoUploader = () => {
  const [file, setFile] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(false);

  const handleFileDrop = (e) => {
    e.preventDefault();
    setFileSizeError(false);

    const selectedFile = e.dataTransfer.files[0];
    const fileSize = selectedFile.size / 1024 / 1024; // in MB

    if (fileSize > 2) {
      setFileSizeError(true);
    } else {
      setFile(selectedFile);
      alert("File selected successfully.");
      // You can perform further actions here with the selected file.
    }
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileSize = selectedFile.size / 1024 / 1024; // in MB

    if (fileSize > 2) {
      setFileSizeError(true);
    } else {
      setFile(selectedFile);
    //   alert("File selected successfully.");
      // You can perform further actions here with the selected file.
    }
  };

  const handleEditClick = () => {
    // Handle edit icon click, you can add your own logic here
    // alert("Edit icon clicked");
  };

  return (
    <ChakraProvider>
      <Box display={"flex"} gap={"8px"} flexDir={"column"}>
        <Text fontWeight={500} fontSize={14} color={"#667085"}>
          Workspace Logo
        </Text>
        <label style={{ width: "fit-content" }} htmlFor="file-input">
          <Box
            bgColor="#D8FFEA"
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
            border="2px dashed #072B15"
            borderRadius="lg"
            width="208px"
            height="208px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            position="relative"
          >
            {file ? (
              <Box
                backgroundImage={`url(${URL.createObjectURL(file)})`}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                position="relative"
                width="206px"
                onClick={handleEditClick}
                height="206px"
                borderRadius="lg"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box size={3} p={2} borderRadius={"50%"} backgroundColor={"rgba(35, 206, 107, 0.64)"}>  <FiEdit2
                  size={"24px"}
                  color="#072B15"
                  cursor="pointer"
                  onClick={handleEditClick}
                /></Box>
              
              </Box>
            ) : (
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
              >
                <FiUpload size={"48px"} strokeWidth={1} />
                <Text fontSize="md" color="#667085">
                  Max file size 2MB
                </Text>
              </Box>
            )}
            <input
              style={{ display: "none" }}
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleFileInputChange}
              display="none"
            />
          </Box>
        </label>
      </Box>
      {fileSizeError && (
        <Center mt="4">
          <Text color="red.500">
            File size exceeds the limit. Please choose a file smaller than 2MB.
          </Text>
        </Center>
      )}
    </ChakraProvider>
  );
};

export default LogoUploader;
