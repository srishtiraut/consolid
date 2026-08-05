import { ActivityCalendar } from "react-activity-calendar"

// data variable is an array of objects
//count = github + leetcode + gfg
const data = [          
  {
    date: '2025-08-04',

    github: 8,
    leetcode: 2,
    gfg: 1,

    count: 11,  //actual contributions made that day
    level: 4, //determines shade of the tile
  },
  {
    date: '2026-07-26',

    github: 0,
    leetcode: 1,
    gfg: 2,

    count: 7,
    level: 3,
  },
  {
    date: '2026-07-27',

    github: 0,
    leetcode: 1,
    gfg: 2,

    count: 11,
    level: 4,
  },
  {
    date: '2026-08-02',

    github: 2,
    leetcode: 0,
    gfg: 0,

    count: 2,
    level: 1,
  }, 
  {
    date: '2026-08-04',

    github: 0,
    leetcode: 1,
    gfg: 2,

    count: 3,
    level: 2,
  },
]

const Heatmap = () => {
  return (
    <div>
        <ActivityCalendar
            data={data}
            minLevel={0}
            maxLevel={5}
            labels={{
                legend: { less: 'Less', more: 'More' },
            }}
            theme={{
                // Red for negative levels, gray for zero, green for positive ones.
                light: ['red', 'hsl(0, 0%, 92%)', 'green'],
                dark: ['red', 'hsl(0, 0%, 92%)', 'green'],
            }}
            tooltips={{
                activity: {
                // text: ({ count, level }) => `${count} activities`,
                text: ({ count, github, leetcode, gfg }) => `Github: ${github} Leetcode: ${leetcode} GFG: ${gfg} Total contributions: ${count}`,
                withArrow: true,
                },
            }}
            style={{ margin: '1.5rem 0'}}
        />
    </div>
  )
}

export default Heatmap