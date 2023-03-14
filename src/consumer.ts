import { connect } from 'https://deno.land/x/amqp@v0.23.1/mod.ts'
import 'https://deno.land/std@0.179.0/dotenv/load.ts'

const channelName = Deno.env.get("ISSUES_QUEUE") || ''
const username = Deno.env.get("RABBITMQ_DEFAULT_USER") || 'guest'
const password = Deno.env.get("RABBITMQ_DEFAULT_PASS") || ''
const port = Number(Deno.env.get("QUEUES_PORT")) || 5672
const hostname = Deno.env.get("QUEUES_HOST") || 'localhost'

console.log(
    ['channelName', channelName],
    ['username', username],
    ['password', password],
    ['port', port],
    ['host', hostname],
)

const connection = await connect({ hostname, port, username, password });

const channel = await connection.openChannel();

await channel.declareQueue({ queue: channelName });
await channel.consume(
  { queue: channelName },
  async (args, props, data) => {
    console.log(JSON.stringify(args));
    console.log(JSON.stringify(props));
    console.log(new TextDecoder().decode(data));
    await channel.ack({});
  },
);
