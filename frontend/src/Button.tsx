// frontend/src/components/Button.tsx
import React from 'react';
import styles from './Button.module.css'; // Vamos criar este arquivo CSS Module

interface ButtonProps {
  icon?: string; // Opcional para alguns botões
  text: string;
  bgColor: string;
  textColor: string;
  onClick?: () => void; // Ação ao clicar no botão
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

export default Button;