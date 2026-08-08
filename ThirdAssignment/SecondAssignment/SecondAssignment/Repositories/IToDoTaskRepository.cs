using SecondAssignment.Models;

namespace SecondAssignment.Repositories
{
    public interface IToDoTaskRepository
    {
        Task<IEnumerable<ToDoTask>> GetAllAsync();
        Task<int> CalculateAsync();
        Task AddAsync(ToDoTask todotask);
        Task EditAsync(ToDoTask toDoTask);
        Task DeleteAsync(int id);
    }
}
