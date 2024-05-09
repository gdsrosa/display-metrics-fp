import { Warning } from '@/components/common/Warning';

export default function WarningContainer() {
  return (
    <Warning
      message={
        'To optimize the user experience, we suggest utilizing the application on a desktop.'
      }
    />
  );
}
