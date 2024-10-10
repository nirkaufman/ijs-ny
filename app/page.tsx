import {wait} from '../utils/wait';
import {Button} from "@/shared/Button";

export default async function Home() {
  await wait(1000);

  return (
    <div>
      <h1>NextJS IO</h1>
      {JSON.stringify(new Date().getMilliseconds())}
      <Button />
    </div>
  );
}
