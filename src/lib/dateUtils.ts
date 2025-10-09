import { differenceInMonths, format, parseISO } from 'date-fns';

export interface ExperienceDate {
  month: number; // 1-12
  year: number;
}

export function formatExperienceDuration(
  startDate: ExperienceDate,
  endDate?: ExperienceDate
): string {
  const start = new Date(startDate.year, startDate.month - 1, 1);
  const end = endDate 
    ? new Date(endDate.year, endDate.month - 1, 1) 
    : new Date();

  // Add 1 to include both start and end months (inclusive)
  const totalMonths = differenceInMonths(end, start) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let duration = '';
  if (years > 0) {
    duration += `${years} yr${years > 1 ? 's' : ''}`;
  }
  if (months > 0) {
    if (duration) duration += ' ';
    duration += `${months} mo${months > 1 ? 's' : ''}`;
  }
  if (!duration) {
    duration = '1 mo'; // Less than a month
  }

  return duration;
}

export function formatExperiencePeriod(
  startDate: ExperienceDate,
  endDate?: ExperienceDate
): string {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const startStr = `${monthNames[startDate.month - 1]} ${startDate.year}`;
  const endStr = endDate 
    ? `${monthNames[endDate.month - 1]} ${endDate.year}` 
    : 'Present';

  const duration = formatExperienceDuration(startDate, endDate);

  return `${startStr} – ${endStr} · ${duration}`;
}
