import { useRef, MouseEvent, useContext } from 'react';

import {
  Chart as ChartJS,
  ChartData,
  ArcElement,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
} from 'chart.js';
import { Pie, getElementAtEvent } from 'react-chartjs-2';
import { darken, lighten } from 'polished';
import useGetDataByCategory from '@/hooks/useGetDataByCategory';
import { Colors } from '@/theme/colors';
import { convertToPercentage, convertToMinutes } from '@/utils/numbers';
import { capitalize } from '@/utils/strings/capitalize';
import Card from '@/components/common/Card';
import { StyledChartsContainer } from './styles';
import { ChartLabelDispatchContext } from '@/context/ChartContext';
import { actions } from '@/context/actions';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
  onHover: (event: ChartEvent, chartElement: ActiveElement[]) => {
    if (event.native?.target) {
      if (chartElement.length === 1) {
        (event.native.target as HTMLElement).style.cursor = 'pointer';
      }
    }
  },
};

export default function ChartsContainer() {
  const chartEfficiencyRef = useRef<ChartJS<'pie'>>();
  const chartDowntimeRef = useRef<ChartJS<'pie'>>();
  const chartShiftRef = useRef<ChartJS<'pie'>>();

  const dispatch = useContext(ChartLabelDispatchContext);

  const { getCategorizedRawDataBy } = useGetDataByCategory();

  const downTimeData = getCategorizedRawDataBy('downtime');
  const shiftData = getCategorizedRawDataBy('shift');
  const efficiencyData = getCategorizedRawDataBy('efficiency');

  const chartDowntimeSetup: ChartData<'pie', number[], string> = {
    labels: downTimeData.map(({ label }) => label),
    datasets: [
      {
        label: `${downTimeData[0]?.label} in seconds`,
        data: [Number(downTimeData[0]?.value), Number(downTimeData[1]?.value)],
        backgroundColor: [darken(0.3, Colors.red), Colors.red],
      },
    ],
  };

  const chartShiftSetup: ChartData<'pie', number[], string> = {
    labels: shiftData.map(({ label }) => label),
    datasets: [
      {
        label: `${shiftData[0]?.label} in minutes`,
        data: [
          convertToMinutes(Number(shiftData[0]?.value)),
          convertToMinutes(Number(shiftData[1]?.value), 'hours'),
        ],
        backgroundColor: [darken(0.3, Colors.green), Colors.green],
      },
    ],
  };

  const chartEfficiencySetup: ChartData<'pie', number[], string> = {
    labels: efficiencyData.map(({ label }) => label),
    datasets: [
      {
        label: capitalize(efficiencyData[0]?.label),
        data: [
          convertToPercentage(Number(efficiencyData[0]?.value)),
          Number(efficiencyData[1]?.value),
          Number(efficiencyData[2]?.value),
        ],
        backgroundColor: [
          Colors.orange,
          darken(0.3, Colors.orange),
          lighten(0.2, Colors.orange),
        ],
      },
    ],
  };

  function handleEfficiencyChartClick(event: MouseEvent<HTMLCanvasElement>) {
    const element = getElementAtEvent(
      chartEfficiencyRef.current as ChartJS,
      event,
    );

    const chartLabel = chartEfficiencySetup.labels
      ? chartEfficiencySetup.labels[element[0]?.index]
      : '';

    dispatch({ type: actions.EFFICIENCY_CLICK, payload: chartLabel });
  }

  function handleDowntimeChartClick(event: MouseEvent<HTMLCanvasElement>) {
    const element = getElementAtEvent(
      chartDowntimeRef.current as ChartJS,
      event,
    );

    const chartLabel = chartDowntimeSetup.labels
      ? chartDowntimeSetup.labels[element[0]?.index]
      : '';

    dispatch({ type: actions.DOWNTIME_CLICK, payload: chartLabel });
  }

  function handleShiftChartClick(event: MouseEvent<HTMLCanvasElement>) {
    const element = getElementAtEvent(chartShiftRef.current as ChartJS, event);

    const chartLabel = chartShiftSetup.labels
      ? chartShiftSetup.labels[element[0]?.index]
      : '';

    dispatch({ type: actions.SHIFT_CLICK, payload: chartLabel });
  }

  return (
    <Card>
      <StyledChartsContainer data-testid="charts">
        <Pie
          data-testid="xpto"
          ref={chartEfficiencyRef}
          data={chartEfficiencySetup}
          options={options}
          onClick={handleEfficiencyChartClick}
        />
        <Pie
          ref={chartDowntimeRef}
          data={chartDowntimeSetup}
          options={options}
          onClick={handleDowntimeChartClick}
        />
        <Pie
          ref={chartShiftRef}
          data={chartShiftSetup}
          options={options}
          onClick={handleShiftChartClick}
        />
      </StyledChartsContainer>
    </Card>
  );
}
