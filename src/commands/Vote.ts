import { BaseCommandInteraction, Client, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { Command } from "../Command";

export const Votepoll: Command = {
  name: "vote",
  description: "Poll made to vote.",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton().setCustomId("vote_yes").setLabel("yes").setStyle("SUCCESS")
    );

    await interaction.followUp({
      ephemeral: true,
      components: [row],
    });
  },
};
