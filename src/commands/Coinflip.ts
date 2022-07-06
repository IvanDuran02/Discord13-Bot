import { Base, BaseCommandInteraction, Client, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { Command } from "../Command";

export const Coinflip: Command = {
  name: "coinflip",
  description: "Coin flips, Heads or Tails",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
      let randomnum = Math.floor(Math.random() * 100 + 1);
      if (randomnum < 50) {
        let content = "You rolled Tails";

        await interaction.followUp({
          content,
        });

      } else if (randomnum > 50) {
        let content = "You rolled Heads";

        await interaction.followUp({
          content,
        });
        
      }
  },
};
