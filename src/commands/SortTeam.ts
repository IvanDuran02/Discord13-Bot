import { Base, BaseCommandInteraction, Client, MessageActionRow, MessageButton } from "discord.js";
import { Command } from "../Command";
import { MessageEmbed } from "discord.js";

export const TeamSort: Command = {
  name: "teamsort",
  description: "sorts players into 2 fair teams",
  type: "CHAT_INPUT",

  run: async (client: Client, interaction: BaseCommandInteraction) => {
    console.log("running sorting script.");
    function shuffle(array: number[]) {
      let currentIndex = array.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }

      return array;
    }
    class Player {
      name: string;
      score: number;
      constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
      }
    }
    let popo = new Player("popo", 635);
    let j1 = new Player("j1", 698);
    let liav = new Player("liav", 686);
    let jason = new Player("jason", 657);
    let armand = new Player("armand", 600);
    let wassim = new Player("wassim", 675);
    let jeremy = new Player("jeremy", 598);
    let william = new Player("william", 660);
    let ruby = new Player("ruby", 616);
    let paul = new Player("paul", 570);

    let playing_players: any = [popo, j1, liav, jason, armand, wassim, jeremy, william, ruby, paul];

    let team1: any = [];
    let team2: any = [];

    if (playing_players.length === 10) {
      team1 = [playing_players[0], playing_players[1], playing_players[2], playing_players[3], playing_players[4]];

      team2 = [playing_players[5], playing_players[6], playing_players[7], playing_players[8], playing_players[9]];
    }

    let team1_average = 0;
    let team2_average = 0;

    for (let i = 0; i < 5; i++) {
      team1_average += team1[i].score;
    }
    for (let i = 0; i < 5; i++) {
      team2_average += team2[i].score;
    }
    let fair = false;

    if (team1_average - team2_average > -50 && team1_average - team2_average < 50) {
      fair = true;
    } else {
      fair = false;
    }

    while (fair === false) {
      shuffle(playing_players);
      team1 = [];
      team2 = [];
      team1_average = 0;
      team2_average = 0;
      if (playing_players.length === 10) {
        team1 = [playing_players[0], playing_players[1], playing_players[2], playing_players[3], playing_players[4]];

        team2 = [playing_players[5], playing_players[6], playing_players[7], playing_players[8], playing_players[9]];
      }

      for (let i = 0; i < 5; i++) {
        team1_average += team1[i].score;
      }
      for (let i = 0; i < 5; i++) {
        team2_average += team2[i].score;

        if (team1_average - team2_average > -50 && team1_average - team2_average < 50) {
          fair = true;
        } else {
          fair = false;
        }
      }
    }

    console.log("script complete...");
    await interaction.followUp({
      ephemeral: true,
      embeds: [
        new MessageEmbed()
          .setColor("#0099ff")
          .setTitle("TeamSorter9000")
          .setDescription("Players sorted in 2 teams.")
          .setThumbnail("https://i.imgur.com/AfFp7pu.png")
          .addFields(
            {
              name: "Team 1",
              value: `1: ${team1[0].name}\n2: ${team1[1].name}\n3: ${team1[2].name}\n4: ${team1[3].name}\n5: ${team1[4].name}`,
            },
            { name: "\u200B", value: "\u200B" },
            {
              name: "Team 2",
              value: `1: ${team2[0].name}\n2: ${team2[1].name}\n3: ${team2[2].name}\n4: ${team2[3].name}\n5: ${team2[4].name}`,
            }
          ),
      ],
      components: [
        new MessageActionRow().addComponents(
          new MessageButton().setCustomId("primary").setLabel("Primary").setStyle("PRIMARY")
        ),
      ],
    });
    await interaction.reply({
      content: "Pong!",
      components: [
        new MessageActionRow().addComponents(
          new MessageButton().setCustomId("primary").setLabel("Primary").setStyle("PRIMARY")
        ),
      ],
    });
  },
};

/*const content: embeds = new MessageEmbed()
.setColor("#0099ff")
.setTitle("TeamSorter9000")
.setDescription("Players sorted in 2 teams.")
.setThumbnail("https://i.imgur.com/AfFp7pu.png")
.addFields(
  {
    name: "Team 1",
    value: `1: ${team1[0].name}\n2: ${team1[1].name}\n3: ${team1[2].name}\n4: ${team1[3].name}\n5: ${team1[4].name}`,
  },
  { name: "\u200B", value: "\u200B" },
  {
    name: "Team 2",
    value: `1: ${team2[0].name}\n2: ${team2[1].name}\n3: ${team2[2].name}\n4: ${team2[3].name}\n5: ${team2[4].name}`,
  }
); */
