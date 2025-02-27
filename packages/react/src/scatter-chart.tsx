import React from 'react';
import { ScatterChart as SC } from '@carbon/charts';
import { ChartConfig, ScatterChartOptions } from '@carbon/charts/interfaces';
import BaseChart from './base-chart';
import { hasChartBeenInitialized } from './utils';

type ScatterChartProps = ChartConfig<ScatterChartOptions>;

export default class ScatterChart extends BaseChart<ScatterChartOptions> {
	chartRef!: HTMLDivElement;
	props!: ScatterChartProps;
	chart!: SC;

	componentDidMount() {
		if (hasChartBeenInitialized(this.chartRef) === false) {
			this.chart = new SC(this.chartRef, {
				data: this.props.data as any,
				options: this.props.options!,
			});
		}
	}

	render() {
		return (
			<div
				ref={(chartRef) => (this.chartRef = chartRef!)}
				className="chart-holder"></div>
		);
	}
}
