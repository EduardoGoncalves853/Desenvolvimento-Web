import { ChangeEvent, useEffect, useState } from "react";

// Tipagem
type UserData = {
  name: string;
  avatar_url: string;
  bio: string;
};

export function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("EmanuelQuintino");
  const [data, setData] = useState<UserData>({} as UserData);

  function AddCount() {
    // closures
    setCount((prevState) => prevState + 1);
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  useEffect(() => {
    // hook
    fetch("https://api.github.com/users/${name}")
      .then((response) => response.json())
      .then((data) => setData(data));

    console.log("Effect");
  }, [name]);

  console.log(data);

  return (
    <>
      <h1>Class-03-States</h1>
      <p>Name:{name}</p>
      <p>Count:{count}</p>
      <button onClick={AddCount}>Add&gt;</button>
      <input type="text" onChange={handleChangeName} />

      {data && (
        <section>
          <h2>{data.name}</h2>
          <img src={data.avatar_url} alt="" />
          <p>{data.bio}</p>
        </section>
      )}
    </>
  );
}
