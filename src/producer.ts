import { connect } from 'https://deno.land/x/amqp@v0.23.1/mod.ts'
import { generate } from 'https://deno.land/std@0.85.0/uuid/v4.ts';
import 'https://deno.land/std@0.179.0/dotenv/load.ts'

const channelName = Deno.env.get("ISSUES_QUEUE")
const username = Deno.env.get("RABBITMQ_DEFAULT_USER")
const password = Deno.env.get("RABBITMQ_DEFAULT_PASS")
const port = Number(Deno.env.get("QUEUES_PORT")) || 5672

const connection = await connect({ port, username, password });
const channel = await connection.openChannel();

await channel.publish(
  { routingKey: channelName },
  { contentType: "application/json" },
  new TextEncoder().encode(JSON.stringify({ id: generate() })),
);

await connection.close();