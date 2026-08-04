import { ActivityCalendar } from "react-activity-calendar"

// data variable is an array of objects
const data = [          
  {
    date: '2025-08-04',
    count: 2,
    level: 1,
  },
  {
    date: '2026-07-02',
    count: 16,
    level: 4,
  },
  {
    date: '2026-06-04',
    count: 11,
    level: 3,
  },
  {
    date: '2026-05-22',
    count: 16,
    level: 2,
  },
  {
    date: '2026-07-23',
    count: 2,
    level: 4,
  }, 
  {
    date: '2026-07-24',
    count: 1,
    level: 3,
  },  
  {
    date: '2026-05-02',
    count: 16,
    level: 3,
  },
  {
    date: '2026-08-01',
    count: 2,
    level: 2,
  }, 
  {
    date: '2026-08-02',
    count: 1,
    level: 1,
  }, 
  {
    date: '2026-08-04',
    count: 11,
    level: 3,
  },
]

const Heatmap = () => {
  return (
    <div>
        <ActivityCalendar data={data} />
    </div>
  )
}

export default Heatmap