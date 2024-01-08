import { FreshContext, Handlers, PageProps } from '$fresh/server.ts';
import * as path from '$std/path/mod.ts';
import { CSS, render } from '$gfm/mod.ts';
import { Head } from '$fresh/runtime.ts';

const DOCUMENT_ROOT = 'docs/';

export const handler: Handlers = {
  async GET(_req: Request, context: FreshContext) {
    try {
      const source = await Deno.readTextFile(
        path.join(DOCUMENT_ROOT, context.params.page + '.md'),
      );
      context.params.source = source;
    } catch (error) {
      return context.renderNotFound();
    }
    const response = await context.render();
    response.headers.set('X-Custom-Header', 'Hello World');
    return response;
  },
};

export default function Page(props: PageProps) {
  const body = render(props.params.source);
  return (
    <>
      <Head>
        <style>{CSS}</style>
      </Head>
      <div id='contents' dangerouslySetInnerHTML={{ __html: body }}></div>
    </>
  );
}
