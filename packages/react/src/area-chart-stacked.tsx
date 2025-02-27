import React from 'react';
import { StackedAreaChart as SAC } from '@carbon/charts';
import BaseChart from './base-chart';
import {
	ChartConfig,
	StackedAreaChartOptions,
} from '@carbon/charts/interfaces';
import { hasChartBeenInitialized } from './utils';

type StackedAreaChartProps = ChartConfig<StackedAreaChartOptions>;

export default class StackedAreaChart extends BaseChart<StackedAreaChartOptions> {
	chartRef!: HTMLDivElement;
	props!: StackedAreaChartProps;
	chart!: SAC;

	componentDidMount() {
		if (hasChartBeenInitialized(this.chartRef) === false) {
			this.chart = new SAC(this.chartRef, {
				data: this.props.data,
				options: this.props.options,
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
