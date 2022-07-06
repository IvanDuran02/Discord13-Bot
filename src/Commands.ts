import { Command } from "./Command";
import { Coinflip } from "./commands/Coinflip";
import { Hello } from "./commands/Hello";
import { TeamSort } from "./commands/SortTeam";
import { Votepoll } from "./commands/Vote";

// Centralizing all slash commands into an array

export const Commands: Command[] = [Hello, TeamSort, Votepoll];
