import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ChevronDown, ChevronUp } from "lucide-react";

const DropdownContainer = styled.div`
  position: relative;
  width: 100px;
  flex:1;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  background-color: #ccc;
  cursor: pointer;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1000;
`;

const DropdownList = styled.ul`
  padding: 20px 0 0;  // Add top padding to make space for the header
  margin: 0;
  list-style-type: none;
  max-height: 150px;
  overflow-y: auto;
`;

const ListItem = styled.li`
  padding: 5px 10px;
  font-size: 12px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CustomDropdown = ({ options, defaultOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </DropdownHeader>
      {isOpen && (
        <DropdownContent>
          <DropdownList>
            {options.map((option, index) => (
              <ListItem key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </ListItem>
            ))}
          </DropdownList>
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default CustomDropdown;
