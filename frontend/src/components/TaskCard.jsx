import { CheckCircle2, Circle, Edit2, Trash2 } from 'lucide-react';

const TaskCard = ({ task, onToggleStatus, onEdit, onDelete }) => {
  const isCompleted = task.status === 'Completed';

  return (
    <div className={`bg-white rounded-xl shadow-sm border ${isCompleted ? 'border-gray-100 bg-gray-50/50' : 'border-gray-200'} p-5 transition-all hover:shadow-md group`}>
      <div className="flex items-start gap-4">
        <button 
          onClick={() => onToggleStatus(task.id, isCompleted ? 'Pending' : 'Completed')}
          className={`mt-0.5 shrink-0 transition-colors ${isCompleted ? 'text-green-500 hover:text-green-600' : 'text-gray-300 hover:text-indigo-500'}`}
        >
          {isCompleted ? <CheckCircle2 className="h-6 w-6" /> : <Circle className="h-6 w-6" />}
        </button>
        
        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-semibold truncate ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className={`mt-1 text-sm ${isCompleted ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
              {task.description}
            </p>
          )}
          <div className="mt-3 flex items-center gap-3">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              isCompleted 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {task.status}
            </span>
            <span className="text-xs text-gray-400">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(task)}
            className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            title="Edit Task"
          >
            <Edit2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete Task"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
