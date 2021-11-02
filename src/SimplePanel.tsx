import React from 'react';
import { PanelProps } from '@grafana/data';
import Chart from 'react-google-charts';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();

  // const dataset = [100, 200, 300, 400, 500];
  // let size = 500;
  // let svg = d3.select("#zyiou")
  //            .append('svg')
  //            .attr('width', size)
  //            .attr('height', size);
  // let rect_width = 95;
  // svg.selectAll('rect')
  //  .data(dataset)
  //  .enter()
  //  .append('rect')
  //  .attr('x', (d, i) => 5 + i*(rect_width + 5))
  //  .attr('y', d => size - d)
  //  .attr('width', rect_width)
  //  .attr('height', d => d)
  //  .attr('fill', 'teal');

  const handleClick = () => {
    console.log(data.series);
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
      <button> Test2 </button>
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
    // <svg
    //   className={styles.svg}
    //   width={width}
    //   height={height}
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
    // >
    //   <g>
    //     <circle style={{ fill: `${theme.isLight ? theme.palette.greenBase : theme.palette.blue95}` }} r={100} />
    //   </g>
    // </svg>
    //
    // <div className={styles.textBox}>
    //   {options.showSeriesCount && (
    //     <div
    //       className={css`
    //         font-size: ${theme.typography.size[options.seriesCountSize]};
    //       `}
    //     >
    //       Number of series: {data.series.length}
    //     </div>
    //   )}
    //   <div>Yiou test text: {options.text}</div>
    // </div>
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
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
