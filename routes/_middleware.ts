import { FreshContext } from '$fresh/server.ts';

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: FreshContext<State>,
) {
  console.log(`middleware ${req.url}`);
  console.log(JSON.stringify(ctx));
  ctx.render

  /*if (req.url === 'http://localhost:8000/words/test') {
    ctx.route = '/:page';
        throw new Error('test');
  }*/
  ctx.state.data = 'myData';
//  ctx.route = '[page]'
  const resp = await ctx.next();
  resp.headers.set('server', 'fresh server');
  return resp;
}
