import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TonConnectButton } from '@tonconnect/ui-react';
import { FaRobot, FaDragon, FaWallet, FaSeedling, FaGraduationCap, FaTools } from 'react-icons/fa';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #FF0000;
  padding: 20px 20px 90px;
  position: relative;
  overflow-x: hidden;
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #FF0000;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
  border-bottom: 2px solid #CC0000;
`;

const LogoImage = styled.div`
  width: 180px;
  height: 45px;
  background-image: url('/pokemon_logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
`;

const Content = styled.div`
  background: #f0f0f0;
  border-radius: 15px;
  border: 8px solid #fff;
  margin: 60px auto 0;
  max-width: 600px;
  padding: 20px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const MainButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding: 0 10px;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  border: none;
  background: ${props => props.green ? '#4CAF50' : '#333'};
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

const Icon = styled.div`
  font-size: 1.5rem;
`;

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    // Инициализация Telegram Web App
    const webApp = window.Telegram?.WebApp;

    if (webApp) {
      // Настройка Telegram Web App
      webApp.ready();
      webApp.expand();
      webApp.MainButton.show();
      webApp.MainButton.setText('Connect Wallet');
      
      // Обработка нажатия на главную кнопку
      webApp.MainButton.onClick(() => {
        setIsWalletConnected(!isWalletConnected);
      });
    }
  }, []);

  const handleWalletConnect = () => {
    setIsWalletConnected(true);
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.MainButton.setText('Connected');
      window.Telegram.WebApp.MainButton.hide();
    }
  };

  return (
    <AppContainer>
      <TopBar>
        <LogoImage />
      </TopBar>

      <Content>
        <h1>Welcome to Pokemon TMA</h1>
        <p>Collect and trade your favorite Pokemon</p>

        <MainButtons>
          <ActionButton onClick={handleWalletConnect}>
            <Icon><FaWallet /></Icon>
            Connect Wallet
          </ActionButton>
          
          <ActionButton green>
            <Icon><FaDragon /></Icon>
            My Pokemons
          </ActionButton>

          <ActionButton>
            <Icon><FaTools /></Icon>
            Settings
          </ActionButton>
        </MainButtons>
      </Content>

      <TonConnectButton
        manifestUrl="/tonconnect-manifest.json"
        onSuccess={handleWalletConnect}
      />
    </AppContainer>
  );
}

export default App;