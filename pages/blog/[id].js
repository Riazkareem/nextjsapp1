export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
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

function postDetails({ data }) {
  return (
    <div>
      <h1>post details </h1>
      <h5>Title: {data.title}</h5>
      <p>{data.body}</p>
    </div>
  );
}

export default postDetails;
