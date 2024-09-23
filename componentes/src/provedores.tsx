import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProveedorOrganos = () => {
  const [organos, setOrganos] = useState([]);
  const [organoActual, setOrganoActual] = useState({ id: '', tipo: '', descripcion: '', calidad: 'Alta', precio: 0 });
  const [modo, setModo] = useState('agregar'); // 'agregar', 'editar', 'buscar'

  useEffect(() => {
    cargarOrganos();
  }, []);

  const cargarOrganos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/provedor');
      setOrganos(response.data);
    } catch (error) {
      console.error('Error al cargar órganos:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrganoActual({ ...organoActual, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modo === 'agregar') {
        await axios.post('http://localhost:4000/provedor', organoActual);
      } else if (modo === 'editar') {
        await axios.put(`http://localhost:4000/provedor/${organoActual.id}`, organoActual);
      }
      cargarOrganos();
      setOrganoActual({ id: '', tipo: '', descripcion: '', calidad: 'Alta', precio: 0 });
      setModo('agregar');
    } catch (error) {
      console.error('Error al guardar órgano:', error);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/provedor/${id}`);
      cargarOrganos();
    } catch (error) {
      console.error('Error al eliminar órgano:', error);
    }
  };

  const handleEditar = (organo) => {
    setOrganoActual(organo);
    setModo('editar');
  };

  const handleBuscar = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/provedor/${organoActual.id}`);
      setOrganos([response.data]);
    } catch (error) {
      console.error('Error al buscar órgano:', error);
    }
  };

  return (
    <div>
      <h2>Gestión de Órganos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tipo"
          value={organoActual.tipo}
          onChange={handleInputChange}
          placeholder="Tipo del órgano"
          required
        />
        <input
          type="text"
          name="descripcion"
          value={organoActual.descripcion}
          onChange={handleInputChange}
          placeholder="Descripción del órgano"
          required
        />
        <select
          name="calidad"
          value={organoActual.calidad}
          onChange={handleInputChange}
          required
        >
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
        <input
          type="number"
          name="precio"
          value={organoActual.precio}
          onChange={handleInputChange}
          placeholder="Precio del órgano"
          required
        />
        <button type="submit">{modo === 'editar' ? 'Actualizar' : 'Agregar'} Órgano</button>
      </form>
      <div>
        <input
          type="text"
          name="id"
          value={organoActual.id}
          onChange={handleInputChange}
          placeholder="ID del órgano a buscar"
        />
        <button onClick={handleBuscar}>Buscar Órgano</button>
      </div>
      <ul>
        {organos.map((organo) => (
          <li key={organo.id}>
            {organo.tipo} - {organo.descripcion} - Calidad: {organo.calidad} - Precio: {organo.precio}
            <button onClick={() => handleEditar(organo)}>Editar</button>
            <button onClick={() => handleEliminar(organo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProveedorOrganos;
