using Microsoft.AspNetCore.Mvc;
using SecondAssignment.Models;
using SecondAssignment.Services;

namespace SecondAssignment.Controllers
{
    [ApiController]
    [Route("api/data")]
    public class MyAppController : ControllerBase
    {
        private readonly IToDoTaskService service;

        public MyAppController(IToDoTaskService service)
        {
            this.service = service;
        }

        [HttpGet]

        public async Task<IActionResult> GetAll()
        {
            var ToDoTask = await service.GetAllAsync();

            return Ok(ToDoTask);
        }

        [HttpGet("Calculation")]

        public async Task<IActionResult> Calculate()
        {
            int res = await service.CalculateAsync();

            return Ok(res);
        }

        [HttpPost]
        public async Task<IActionResult> Add(ToDoTask ToDoTask)
        {
            await service.AddAsync(ToDoTask);
            return Ok(ToDoTask);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, ToDoTask ToDoTask)
        {
            if (id != ToDoTask.Id) return BadRequest();
            await service.EditAsync(ToDoTask);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await service.DeleteAsync(id);
            return NoContent();
        }
    }
}
