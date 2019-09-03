import React from 'react';

const SelectDriver = ({ selectValue, handleChange, name }) => {
  return (  
    <select value={selectValue} onChange={handleChange} name={name}>
      <option value="hamilton">Hamilton</option>
      <option value="bottas">Bottas</option>
      <option value="max_verstappen">Verstappen</option>
      <option value="vettel">Vettel</option>
      <option value="leclerc">Leclerc</option>
      <option value="gasly">Gasly</option>
      <option value="sainz">Sainz</option>
      <option value="raikkonen">Raikkonen</option>
      <option value="kvyat">Kvyat</option>
      <option value="norris">Norris</option>
      <option value="ricciardo">Ricciardo</option>
      <option value="stroll">Stroll</option>
      <option value="kevin_magnussen">Magnussen</option>
      <option value="hulkenberg">Hulkenberg</option>
      <option value="albon">Albon</option>
      <option value="perez">Perez</option>
      <option value="grosjean">Grosjean</option>
      <option value="giovinazzi">Giovinazzi</option>
      <option value="kubica">Kubica</option>
      <option value="russell">Russell</option>
    </select>
  );
}
 
export default SelectDriver;