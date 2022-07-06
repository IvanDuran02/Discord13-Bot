import { Client, ClientOptions, MessageEmbed } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

const token = "ODE3MDg4Mzk0ODU2NzU5MzY3.YEEa3g.o2g_k3tHuFtfy9X17PF-2lmf8tk"; // add your token here

console.log("Bot is starting...");

const client = new Client({
  intents: [],
});

// const channel: any = client.channels.cache.find((channel) => channel.id === "817089412781178902");

ready(client);

interactionCreate(client);

client.login(token);
