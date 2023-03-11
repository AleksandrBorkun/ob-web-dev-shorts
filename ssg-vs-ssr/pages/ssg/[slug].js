import fs from "fs";

export default function Page({ person }) {
  return (
    <h1>
      Hello {person.name} age: {person.age}
    </h1>
  );
}

export function getStaticPaths() {
  const db = JSON.parse(fs.readFileSync("public/db.json"));
  return {
    paths: Object.keys(db).map((key) => ({
      params: { slug: key },
    })),
    fallback: false,
  };
}

export function getStaticProps(ctx) {
  const { slug } = ctx.params;

  const db = JSON.parse(fs.readFileSync("public/db.json"));
  const person = db[slug];

  return {
    props: { person },
  };
}
