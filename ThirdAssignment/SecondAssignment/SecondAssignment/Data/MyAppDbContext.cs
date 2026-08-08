using Microsoft.EntityFrameworkCore;
using SecondAssignment.Models;

namespace SecondAssignment.Data
{
    public class MyAppDbContext : DbContext
    {
        public MyAppDbContext(DbContextOptions<MyAppDbContext> options) : base(options)
        {
        }

        public DbSet<ToDoTask> ToDoTasks { get; set; }
    }
}
