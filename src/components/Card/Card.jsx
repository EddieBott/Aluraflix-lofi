import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ id, title, image, description, onEdit, onDelete, onView }) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/video/${id}`);
    if (onView) onView();
  };

  return (
    <div className="card">
      <img src={image} alt={title} onClick={handleView} className="card__image" />
      <h3 className="card__title" onClick={handleView}>{title}</h3>
      <p className="card__description">{description}</p>
      <div className="card__actions">
        {onEdit && <button className="card__button" onClick={onEdit}>Editar</button>}
        {onDelete && <button className="card__button card__button--danger" onClick={onDelete}>Eliminar</button>}
      </div>
    </div>
  );
}

export default Card;