import { useSignal } from '@preact/signals';
import { Head } from '$fresh/runtime.ts';
import Counter from '../islands/Counter.tsx';

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>title change test</title>
      </Head>

      <div id='contents'>
        contents
        <div style={{ height: '120vh' }}></div>
      </div>
    </>
  );
}
