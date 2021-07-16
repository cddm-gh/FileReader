import { MatchResults } from './MatchResults.enum';
import { stringToDate } from './utils';
import { MatchData } from './MatchData.type';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  static fromCsv(fileName: string) {
    return new MatchReader(new CsvFileReader(fileName));
  }

  async load(): Promise<void> {
    await this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResults,
        row[6],
      ];
    });
  }
}
