using Microsoft.EntityFrameworkCore;
using SecondAssignment.Data;
using SecondAssignment.Models;

namespace SecondAssignment.Repositories
{
    public class ToTaskRepository : IToDoTaskRepository
    {
        private readonly MyAppDbContext dbcontext;

        public ToTaskRepository(MyAppDbContext dbcontext) {
            this.dbcontext = dbcontext;
        }

        public async Task<IEnumerable<ToDoTask>> GetAllAsync()
        {
            return await dbcontext.ToDoTasks.ToListAsync();
        }

        public async Task<int> CalculateAsync()
        {
            var task = Task.Run(() => 1 + 1);
            int result = await task.ContinueWith(t => t.Result);
            return result;
        }

        public async Task AddAsync(ToDoTask todotask)
        {
            await dbcontext.ToDoTasks.AddAsync(todotask);
            await dbcontext.SaveChangesAsync();
        }

        public async Task EditAsync(ToDoTask toDoTask)
        {
            dbcontext.ToDoTasks.Update(toDoTask);
            await dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var todotask = await dbcontext.ToDoTasks.FindAsync(id);
            if(todotask != null)
            {
                dbcontext.ToDoTasks.Remove(todotask);
                await dbcontext.SaveChangesAsync();
            }
        }
    }
}
