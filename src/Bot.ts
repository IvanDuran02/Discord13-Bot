import { Client, ClientOptions, MessageEmbed } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import dotenv from "dotenv";
dotenv.config();
const token = process.env.TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
  intents: [],
});

// const channel: any = client.channels.cache.find((channel) => channel.id === "817089412781178902");

ready(client);

interactionCreate(client);

client.login(token);
