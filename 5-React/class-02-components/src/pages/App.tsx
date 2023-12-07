import { CardProfile } from "../components/CardProfile";

const dataAPI = [
  { name: "Du", birth: 2007 },
  { name: "dudu", birth: 2008 },
  { name: "Edu", birth: 2006 },
  { name: "dudin", birth: 2006 },
];

export function App() {
  return (
    <>
      <h1>class -02-components</h1>
      {dataAPI.map((user) => {
return <CardProfile name={user.name} age={user.birth} />;
})}
    </>
  );
}
