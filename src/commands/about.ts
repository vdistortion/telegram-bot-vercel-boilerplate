import type { CommandContext, Context } from 'grammy';
import createDebug from 'debug';
import { reply } from '../core';
import { author, name, version } from '../../package.json';

const debug = createDebug('bot:about_command');

const about = () => async (ctx: CommandContext<Context>) => {
  debug('Triggered "about" command');
  const message = `*${name}@${version}*\n${author}`;
  await reply(ctx, message, { parseMode: 'Markdown' });
};

export { about };
