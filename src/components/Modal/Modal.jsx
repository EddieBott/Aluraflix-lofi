import React, { useEffect, useState } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, onSave, defaultValues }) {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormValues(defaultValues);
  }, [defaultValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.title || formValues.title.trim() === '') {
      newErrors.title = 'El título es obligatorio.';
    }

    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?$/;
    if (!formValues.image || !urlPattern.test(formValues.image)) {
      newErrors.image = 'La imagen debe ser una URL válida.';
    }

    if (!formValues.description || formValues.description.trim().length < 5) {
      newErrors.description = 'La descripción debe tener al menos 5 caracteres.';
    }

    if (!formValues.url || !urlPattern.test(formValues.url)) {
      newErrors.url = 'La URL debe ser válida.';
    }

    if (!formValues.category || formValues.category.trim() === '') {
      newErrors.category = 'La categoría es obligatoria.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formValues);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Editar Video</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label className="modal-form-title">
            Título:
            <input
              type="text"
              name="title"
              value={formValues.title || ''}
              onChange={handleChange}
            />
            {errors.title && <span className="error">{errors.title}</span>}
          </label>
          <label className="modal-form-image">
            Imagen:
            <input
              type="text"
              name="image"
              value={formValues.image || ''}
              onChange={handleChange}
            />
            {errors.image && <span className="error">{errors.image}</span>}
          </label>
          <label className="modal-form-description">
            Descripción:
            <textarea
              name="description"
              value={formValues.description || ''}
              onChange={handleChange}
            />
            {errors.description && (
              <span className="error">{errors.description}</span>
            )}
          </label>
          <label className="modal-form-url">
            URL:
            <input
              type="text"
              name="url"
              value={formValues.url || ''}
              onChange={handleChange}
            />
            {errors.url && <span className="error">{errors.url}</span>}
          </label>
          <label className="modal-form-category">
            Categoría:
            <select
              name="category"
              value={formValues.category || ''}
              onChange={handleChange}
            >
              <option value="">Seleccione una categoría</option>
              <option value="Estudio">Estudio</option>
              <option value="Relajación">Relajación</option>
              <option value="Sueño">Sueño</option>
            </select>
            {errors.category && <span className="error">{errors.category}</span>}
          </label>
          <div className="modal__buttons">
            <button type="submit">Guardar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;