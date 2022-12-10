import Link from "next/link";
export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
const index = ({ data }) => {
  return (
    <>
      <div>
        <h1>Post </h1>
        {data.map((d) => {
          return (
            <div>
              <Link href={"/blog/" + d.id} key={d.id}>
                <h3>{d.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;
