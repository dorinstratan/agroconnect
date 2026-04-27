import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  color?: 'green' | 'amber' | 'blue' | 'red' | 'gray'
  size?: 'sm' | 'md'
}

const colors = {
  green: 'bg-green-50 text-green-600',
  amber: 'bg-amber-50 text-amber-600',
  blue:  'bg-blue-50 text-blue-600',
  red:   'bg-red-100 text-red-600',
  gray:  'bg-gray-100 text-gray-500',
}

export default function Badge({ children, color = 'green', size = 'sm' }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full font-medium',
        colors[color],
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      )}
    >
      {children}
    </span>
  )
}
