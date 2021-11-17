import React from 'react';
import { PanelProps } from '@grafana/data';
import Chart from 'react-google-charts';
import { SankeyOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';

interface Props extends PanelProps<SankeyOptions> {}

export const SankeyPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();

  const handleClick = () => {
    var n = data.series.length;
    for (var i = 0; i < n; i++) {
      console.log(data.series[i]);
    }
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
      <button onClick={handleClick}>Test Button</button>
      <Chart
        width={600}
        height={'300px'}
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        data={[
          ['From', 'To', 'Weight'],
          ['A', 'X', 5],
          ['A', 'Y', 7],
          ['A', 'Z', 6],
          ['B', 'X', 2],
          ['B', 'Y', 9],
          ['B', 'Z', 4],
        ]}
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
