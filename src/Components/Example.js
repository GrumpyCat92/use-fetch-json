import useJsonFetch from "../hooks/useJsonFetch";

export default function Example({ url, opts }) {
  const { data, error, loading } = useJsonFetch(url, opts);

  return (
    <div>
      <h3>Call {url}</h3>
      {loading && "LOADING..."}
      {error && `! ${error}`}
      {data && `Data: ${JSON.stringify(data)}`}
    </div>
  );
}
