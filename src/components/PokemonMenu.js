import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWallet, FaList, FaCog } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const MenuContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-top: 2px solid #FFD700;
`;

const MenuItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 15px;
  transition: all 0.3s ease;
  position: relative;
  color: ${props => props.active ? '#00ff88' : 'rgba(255, 255, 255, 0.7)'};

  &:hover {
    color: #00ff88;
    background: rgba(0, 255, 136, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00ff88, #00b4d8);
    transition: width 0.3s ease;
  }

  ${props => props.active && `
    color: #00ff88;
    background: rgba(0, 255, 136, 0.1);

    &::after {
      width: 20px;
    }
  `}
`;

const Icon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const Label = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

function PokemonMenu({ onWalletClick, onListClick, onSettingsClick }) {
  return (
    <MenuContainer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <MenuItem
        onClick={onWalletClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon>
          <FaWallet />
        </Icon>
        <Label>Wallet</Label>
      </MenuItem>

      <MenuItem
        onClick={onListClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon>
          <FaList />
        </Icon>
        <Label>My Pokemons</Label>
      </MenuItem>

      <MenuItem
        onClick={onSettingsClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon>
          <FaCog />
        </Icon>
        <Label>Settings</Label>
      </MenuItem>
    </MenuContainer>
  );
}

export default PokemonMenu; 