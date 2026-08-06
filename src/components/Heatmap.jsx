import { ActivityCalendar } from "react-activity-calendar"
import {data} from '../data/heatmapData.js'

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