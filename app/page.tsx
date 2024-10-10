export default function Home() {

  return (
    <div>
      <h1>NextJS IO</h1>
      {JSON.stringify(new Date().getMilliseconds())}
    </div>
  );
}
