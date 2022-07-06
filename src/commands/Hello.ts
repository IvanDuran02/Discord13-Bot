import { Base, BaseCommandInteraction, Client, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { Command } from "../Command";

export const Hello: Command = {
  name: "helloo",
  description: "Returns a greeting",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton().setCustomId("primary").setLabel("Primary").setStyle("PRIMARY")
    );
    await interaction.followUp({
      ephemeral: true,
      components: [row],
      /*embeds: [
        new MessageEmbed().setColor("#0099ff").setTitle("Popo's Bot").setDescription(`Hello ${interaction.user}`),
      ], */
    });
  },
};
