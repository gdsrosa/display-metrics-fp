import Card from '@/components/common/Card';
import useGetDataByCategory from '@/hooks/useGetDataByCategory';

import { StyledCardContainer, StyledParagraph, StyledSpan } from './styles';
import { capitalize } from '@/utils/strings/capitalize';
import { Metrics } from '@/types/API';

export default function CardContainer() {
  const { getCategorizedParsedDataBy } = useGetDataByCategory();

  function renderCardContent({ id, label, value, category }: Metrics) {
    return (
      <StyledParagraph key={id}>
        {capitalize(label)}
        <br />
        <StyledSpan $value={value} $category={category}>
          {value}
        </StyledSpan>
      </StyledParagraph>
    );
  }

  return (
    <StyledCardContainer>
      <Card title="Efficiency">
        {getCategorizedParsedDataBy('efficiency').map(renderCardContent)}
      </Card>

      <Card title="Downtime">
        {getCategorizedParsedDataBy('downtime').map(renderCardContent)}
      </Card>

      <Card title="Shift">
        {getCategorizedParsedDataBy('shift').map(renderCardContent)}
      </Card>
    </StyledCardContainer>
  );
}
