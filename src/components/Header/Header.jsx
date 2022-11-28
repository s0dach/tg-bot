import React from "react";
import { useTelegram } from "../../hooks/UseTelegram";
import { Button } from "../Button/Button";
import "./Header.css";

export const Header = () => {
  const { user, onClose } = useTelegram;
  return (
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">
        Список пользователей в сессии: {user?.username}
      </span>
    </div>
  );
};
