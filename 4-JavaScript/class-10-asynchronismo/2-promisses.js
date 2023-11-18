const url = "https://api.github.com/users/EmanuelQuintino";

console.log("Ínicio");

const gitHubUser = fetch(url)
  .then((request) => request.json())
  .then(({ name, bio }) =>
    console.log({
      name,
      bio,
    })
  )
  .catch((error) => console.error(error))
  .finally(() => console.log("Louco e sonhador!"));

console.log(gitHubUser);

setTimeout(() => {
    console.log("Fim");
}, 2000);
