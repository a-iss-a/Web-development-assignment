using SecondAssignment.Models;

namespace SecondAssignment.Services
{
    public interface IToDoTaskService
    {
        Task<IEnumerable<ToDoTask>> GetAllAsync();
        Task<int> CalculateAsync();
        Task AddAsync(ToDoTask task);
        Task EditAsync(ToDoTask task);
        Task DeleteAsync(int id);
    }
}
