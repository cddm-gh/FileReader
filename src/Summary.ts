import { MatchData } from './MatchData.type';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reporters/HtmlReporter';
import { ConsoleReport } from './reporters/ConsoleReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public output: OutputTarget) {}

  static winsAnalysisWithHtmlReport(teamName: string) {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }
  static winsAnalysisWithConsoleReport(teamName: string) {
    return new Summary(new WinsAnalysis(teamName), new ConsoleReport());
  }
  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.output.print(report);
  }
}
