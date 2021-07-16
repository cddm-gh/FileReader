import fs from 'fs';
import { join } from 'path';
import { promisify } from 'util';
const readFileAsync = promisify(fs.readFile);

export class CsvFileReader {
  data: string[][] = [];
  constructor(private fileName: string) {}

  async read(): Promise<void> {
    this.data = await (await readFileAsync(join(__dirname, this.fileName), { encoding: 'utf8' }))
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
