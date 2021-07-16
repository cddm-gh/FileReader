import fs from 'fs';
import { join } from 'path';
import { promisify } from 'util';
const readFileAsync = promisify(fs.readFile);

export abstract class CsvFileReader<RowData> {
  private data: RowData[] = [];
  constructor(private fileName: string) {}
  abstract mapRow(row: string[]): RowData;

  async read(): Promise<void> {
    this.data = await (
      await readFileAsync(join(__dirname, this.fileName), { encoding: 'utf8' })
    )
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }

  getFileData(): RowData[] {
    return this.data;
  }
}
