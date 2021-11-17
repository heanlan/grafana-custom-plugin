import React from 'react';
import { PanelProps } from '@grafana/data';
import Chart from 'react-google-charts';
import { SankeyOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';

interface Props extends PanelProps<SankeyOptions> {}

export const SankeyPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();
  /*
  process data for sankey diagram in following format, make sure to keep SQL result consistent with this format
  [
    ['From', 'To', 'Bytes'],
    [sourcePodName, destinationPodName, throughput]
  ]
  */
  const sankeyData = () => {
    var result = [];
    var n = data.series.length;
    result.push(['From', 'To', 'Bytes']);
    for (var i = 0; i < n; i++) {
      var record = data.series[i].name?.split(',');
      var source = record![0];
      var destination = record![1];
      if (destination === '') {
        destination = record![2];
      }
      var value = data.series[i].fields[1].state as any;
      var stats = value.calcs as any;
      result.push([source, destination, stats.sum]);
    }
    return result;
  };
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <Chart
        width={600}
        height={600}
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        data={sankeyData()}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
  };
});
