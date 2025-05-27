import { useEffect, useState } from 'react';
import { DateTime, Duration } from 'luxon';

type CountdownProps = {
  targetISO: string; // e.g., '2025-05-22T15:00:00'
};

export function LuxonCountdown({ targetISO }: CountdownProps) {
  const [remaining, setRemaining] = useState<Duration | null>(null);

  useEffect(() => {
    const target = DateTime.fromISO(targetISO, { zone: 'Asia/Makassar' }); // WITA = UTC+8

    const updateCountdown = () => {
      const now = DateTime.now().setZone('Asia/Makassar');
      const diff = target.diff(now, ['days', 'hours', 'minutes', 'seconds']).toObject();

      if (target <= now) {
        setRemaining(null); // Countdown complete
      } else {
        setRemaining(Duration.fromObject(diff));
      }
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetISO]);

  if (!remaining) return <span>Countdown complete!</span>;

  return (
    <div className='text-5xl md:text-8xl font-[450] text-white/85 bg-black w-fit md:w-[644px] justify-self-center p-4'>
      <span>{String(Math.floor(remaining.days ?? 0)).padStart(3, '0')} : </span>
      <span>{String(Math.floor(remaining.hours ?? 0)).padStart(2, '0')} : </span>
      <span>{String(Math.floor(remaining.minutes ?? 0)).padStart(2, '0')} : </span>
      <span>{String(Math.floor(remaining.seconds ?? 0)).padStart(2, '0')}</span>
    </div>
  );
}