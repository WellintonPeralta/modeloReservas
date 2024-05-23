import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};

export const useSelectedDeporte = () => {
  const [selectedDeporte, setSelectedDeporte] = useState(null); 

  return [selectedDeporte, setSelectedDeporte];
};

export const useSelectedCancha = () => {
  const [selectedCancha, setSelectedCancha] = useState(null); 

  return [selectedCancha, setSelectedCancha];
};
