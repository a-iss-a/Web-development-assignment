using SecondAssignment.Models;
using SecondAssignment.Repositories;

namespace SecondAssignment.Services
{
    public class ToTaskService : IToDoTaskService
    {
        private readonly IToDoTaskRepository repo;

        public ToTaskService(IToDoTaskRepository repo) {
            this.repo = repo; 
        }

        public Task<IEnumerable<ToDoTask>> GetAllAsync() =>
            repo.GetAllAsync();

        public Task<int> CalculateAsync() => repo.CalculateAsync();

        public Task AddAsync(ToDoTask task) => repo.AddAsync(task);

        public Task EditAsync(ToDoTask task) => repo.EditAsync(task);

        public Task DeleteAsync(int id) => repo.DeleteAsync(id);
    }
}
