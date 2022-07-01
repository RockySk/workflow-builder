import { nodeWidth } from './constants'
import { useWorkflow } from './store'
import { ICatalogNode } from './types'
import { GripVertical } from 'react-bootstrap-icons'
import { useDraggable } from '@dnd-kit/core'

export const CatalogNode = ({ id, label }: ICatalogNode): JSX.Element => {
  const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } = useDraggable({ id, data: { catalog: true } })
  const style = (transform != null)
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : undefined

  const { addNodeToWorkflow } = useWorkflow()

  return (
    <li>
      <button
        ref={setNodeRef} style={{ ...style, width: `${nodeWidth}rem` }} {...attributes}
        title={label}
        className='btn btn-light btn-sm'
        onClick={() => addNodeToWorkflow(id)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>
            {id}
          </span>
          <div ref={setActivatorNodeRef} {...listeners} className='btn btn-light btn-sm' title='Move' style={{cursor: 'grab'}}>
            <GripVertical />
          </div>
        </div>
      </button>

    </li>
  )
}
