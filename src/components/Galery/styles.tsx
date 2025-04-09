import { motion } from "framer-motion";
import styled from "styled-components";

export const GalleryWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  gap: 0.25rem;
  display: flex;
  padding: 2.5rem 0 5rem 0;
  flex-direction: column;
  align-items: center;
`;

export const ItemsRow = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const MotionItem = styled(motion.div) <{ active: boolean }>`
  border-radius: 0.75rem;
  position: relative;
  height: 600px;
  flex-shrink: 0;
  transition: width 0.5s ease-in;
  width: ${({ active }) => (active ? '1000px' : '50px')};
`;

export const MotionImage = styled(motion.img) <{ active: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 0.75rem;
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
`;

export const InfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: end;
  width: 100%;
  margin-top: 1rem;
  text-align: center;
`;

export const MotionTitle = styled(motion.h1)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;

export const MotionDescription = styled(motion.p)`
  line-height: 120%;
  color: #fff;
`;