import fs from 'fs';
import { join } from 'path';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `<div>
      <h1>Analysis Output</h1>
      <p>${report}</p>
    </div>`;

    fs.writeFileSync(join(__dirname, 'report.html'), html, { encoding: 'utf8' });
  }
}
