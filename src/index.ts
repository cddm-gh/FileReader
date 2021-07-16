import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

async function main() {
  const matchReader = MatchReader.fromCsv('football.csv');
  await matchReader.load();

  const summaryHtml = Summary.winsAnalysisWithHtmlReport('Man United');
  const summaryConsole = Summary.winsAnalysisWithConsoleReport('Man United');

  summaryHtml.buildAndPrintReport(matchReader.matches);
  summaryConsole.buildAndPrintReport(matchReader.matches);
}

main();
