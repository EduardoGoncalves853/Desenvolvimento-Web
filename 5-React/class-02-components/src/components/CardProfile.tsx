import "./style.css"
type cardProps = {
  name: string;
  age: number;
};

export function CardProfile({ name, age }: cardProps) {
  return (
    <div className = "container">
      <strong>{name}</strong>
      <p>Idade: {age} </p>
    </div>
  );
}
