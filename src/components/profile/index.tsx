import { useState } from "react";

const Profile = () => {
  const [inputName, setInputName] = useState<string>("");
  const [name, setName] = useState<string>('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputName(e.currentTarget.value)
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setName(inputName)
  };


  return (
    <>
      <form 
        action=""
        onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Name"
          value={inputName}
          onChange={handleChange}
        />
        <button
          type="submit">Guardar</button>
      </form>

      {name && <h1>Hi, {name}</h1>}
    </>
  );
}

export default Profile;