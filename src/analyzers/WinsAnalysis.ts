import { MatchData } from '../MatchData.type';
import { MatchResults } from '../MatchResults.enum';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;

    for (const match of matches) {
      if (
        match[1] === this.teamName &&
        (match[5] === MatchResults.HomeWin || match[5] === MatchResults.AwayWin)
      ) {
        wins++;
      }
    }
    return `Team ${this.teamName} has won: ${wins} games.`;
  }
}
