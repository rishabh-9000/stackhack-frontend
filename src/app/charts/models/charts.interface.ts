export interface ChartData {
  label: string;
  value: number;
}

export interface Chart {
  chart?: {
    caption?: string;
    subCaption?: string;
    xAxisName?: string;
    yAxisName?: string;
    numberSuffix?: string;
    theme?: string;
  };

  data: ChartData[];
}
