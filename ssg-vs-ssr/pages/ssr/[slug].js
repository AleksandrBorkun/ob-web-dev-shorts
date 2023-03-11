import fs from "fs";

export default function Page({ person }) {
  return (
    <h1>
      Hello {person.name} age: {person.age}
    </h1>
  );
}

export function getServerSideProps(ctx) {
  const { slug } = ctx.query;

  const db = JSON.parse(fs.readFileSync("public/db.json"));

  const person = db[slug] || { name: "Guest", age: 0 };

  return {
    props: { person },
  };
}
