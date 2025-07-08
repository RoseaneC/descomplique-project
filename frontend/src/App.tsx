// frontend/src/App.tsx
import React from 'react';
import styles from './App.module.css';

// DEFINIÇÃO DO COMPONENTE CARD (JÁ ESTÁ AQUI)
interface CardProps {
  icon: string;
  title: string;
  description: string;
  iconBgColor: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, iconBgColor }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.iconContainer} style={{ backgroundColor: iconBgColor }}>
        <span className={styles.cardIcon}>{icon}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};
// FIM DA DEFINIÇÃO DO COMPONENTE CARD

// INÍCIO DA DEFINIÇÃO DO COMPONENTE BUTTON - AGORA AQUI DENTRO DO App.tsx
interface ButtonProps {
  icon?: string;
  text: string;
  bgColor: string;
  textColor: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, text, bgColor, textColor, onClick }) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {icon && <span className={styles.buttonIcon}>{icon}</span>}
      {text}
    </button>
  );
};
// FIM DA DEFINIÇÃO DO COMPONENTE BUTTON

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.icon}>🧠</span> Descomplique!
      </h1>
      <p className={styles.subtitle}>
        Explicando o mundo do nosso jeitinho.
      </p>

      {/* Container para os Cards */}
      <div className={styles.cardsGrid}>
        <Card
          icon="🌍"
          iconBgColor="#E6F2FF"
          title="Mundo"
          description="Descubra curiosidades sobre países"
        />
        <Card
          icon="💚"
          iconBgColor="#E8FFF0"
          title="Saúde Física e Mental"
          description="Aprenda sobre ansiedade, sono"
        />
        <Card
          icon="✨"
          iconBgColor="#FFF8E6"
          title="Assuntos Gerais"
          description="IA, bichos, materiais didáticos"
        />
        <Card
          icon="⚠️"
          iconBgColor="#FFEBE6"
          title="Descubra sua vocação"
          description="Faça o quiz ou veja vídeos"
        />
        <Card
          icon="🔥"
          iconBgColor="#FFEBE6"
          title="Burnout"
          description="Entenda o que é, e como prevenir"
        />
        <Card
          icon="👩‍💻"
          iconBgColor="#E6F2FF"
          title="Crise de Carreira"
          description="Como lidar e recomeçar"
        />
      </div>

      {/* Container para os Botões */}
      <div className={styles.buttonsContainer}>
        <Button
          icon="🔍"
          text="Começar a Explorar"
          bgColor="#FFAB91"
          textColor="#FFFFFF"
          onClick={() => console.log("Explorar clicado!")}
        />
        <Button
          icon="📝"
          text="Fazer o Quiz"
          bgColor="#FFE0B2"
          textColor="#4A4A4A"
          onClick={() => console.log("Quiz clicado!")}
        />
        <Button
          icon="😞"
          text="Não tô bem hoje"
          bgColor="#C8E6C9"
          textColor="#4A4A4A"
          onClick={() => console.log("Não tô bem hoje clicado!")}
        />
      </div>
    </div>
  );
}

export default App;