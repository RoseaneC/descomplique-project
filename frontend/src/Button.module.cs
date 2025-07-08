/* frontend/src/components/Button.module.css */

.button {
  padding: 12px 24px;
  border-radius: 30px; /* Borda bem arredondada */
  border: none;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Espaçamento entre ícone e texto */
  transition: background-color 0.3s ease; /* Transição suave ao passar o mouse */
}

.button:hover {
  opacity: 0.9; /* Pequena opacidade para efeito hover */
}

.buttonIcon {
  font-size: 18px; /* Tamanho do ícone dentro do botão */
}