import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResults.enum';
import { stringToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class MatchFileReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      stringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}
