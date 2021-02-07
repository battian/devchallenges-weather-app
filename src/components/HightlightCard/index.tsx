import { LinearProgress } from '@material-ui/core';
import { Navigation } from '@material-ui/icons';

import { Container, CompassContainer, PercentBar } from './styles';

interface HightlightCardProps {
  deg?: number;
  compass?: string;
  percent?: number;
}

const HightlightCard: React.FC<HightlightCardProps> = ({
  children,
  deg,
  compass,
  percent,
}) => {
  return (
    <Container>
      {children}

      {deg && compass && (
        <CompassContainer deg={deg}>
          <Navigation />
          <p>{compass}</p>
        </CompassContainer>
      )}

      {percent && (
        <PercentBar>
          <div>
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>

          <LinearProgress variant="determinate" value={percent} />

          <span>%</span>
        </PercentBar>
      )}
    </Container>
  );
};

export default HightlightCard;
