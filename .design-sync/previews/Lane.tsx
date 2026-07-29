import { Card, Lane } from '@crosses/ui';

/** Every state, in the surface a lane actually lives on. */
export const EveryState = () => (
  <Card style={{ padding: '4px 26px 20px' }}>
    <Lane machine="Machine 01" model="WISE 2086" status={{ kind: 'free', label: 'Free now' }} />
    <Lane
      machine="Machine 02"
      model="GAMMA X-ELS"
      status={{ kind: 'inuse', label: 'Mia · 24m left', left: 42, width: 16 }}
    />
    <Lane
      machine="Machine 03"
      model="BABOLAT STAR 5"
      status={{ kind: 'booked', label: 'Booked 4:00', left: 64, width: 15 }}
    />
    <Lane
      machine="Machine 04"
      model="WISE 2086"
      status={{ kind: 'mine', label: 'You · 45m', left: 50, width: 14 }}
    />
  </Card>
);

export const InUse = () => (
  <Card style={{ padding: '4px 26px 16px' }}>
    <Lane
      machine="Machine 02"
      model="GAMMA X-ELS"
      status={{ kind: 'inuse', label: 'Mia · 24m left', left: 42, width: 16 }}
    />
  </Card>
);

export const Yours = () => (
  <Card style={{ padding: '4px 26px 16px' }}>
    <Lane
      machine="Machine 01"
      model="WISE 2086"
      status={{ kind: 'mine', label: 'You · 45m', left: 50, width: 14 }}
    />
  </Card>
);

/** No model line — a machine nobody has labelled yet. */
export const WithoutAModel = () => (
  <Card style={{ padding: '4px 26px 16px' }}>
    <Lane machine="Machine 05" status={{ kind: 'free', label: 'Free now' }} />
  </Card>
);
