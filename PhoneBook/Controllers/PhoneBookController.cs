namespace PhoneBook.Controllers;

using Microsoft.AspNetCore.Mvc;
using PhoneBook.Models;
using Microsoft.EntityFrameworkCore;

/// <summary>
/// 
/// </summary>
[ApiController]
[Route("[controller]")]
public class PhoneBookController : ControllerBase
{
	private readonly PhoneBookContext _context;
	public PhoneBookController(PhoneBookContext context)
	{
		_context = context;
	}

	//GET: api/PhoneEntries
	[HttpGet]
	public async Task<ActionResult<IEnumerable<PhoneBookEntry>>> GetPhoneEntries()
	{
		return await _context.PhoneBookEntries.ToListAsync();
	}

	//Get: api/PhoneEntries/x
	[HttpGet("{id}")]
	public async Task<ActionResult<PhoneBookEntry>> GetPhoneEntry(int id)
	{
		var PhoneEntry = await _context.PhoneBookEntries.FindAsync(id);

		if (PhoneEntry == null) { return NotFound(); }

		return PhoneEntry;
	}

	//PUT: api/PhoneEntires/5
	[HttpPut("{id}")]
	public async Task<IActionResult> PutPhoneEntry(int id, PhoneBookEntry phoneBookEntry)
	{
		if (id != phoneBookEntry.PhoneBookEntryId) { BadRequest(); }

		_context.Entry(phoneBookEntry).State = EntityState.Modified;

		try
		{
			await _context.SaveChangesAsync();
		}
		catch (DbUpdateConcurrencyException)
		{
			if (!PhoneBookEntryExists(id)) { return NotFound(); }
			else { throw; }
		}

		return NoContent();
	}

	//POST: api/PhoneBookEntries/
	[HttpPost]
	public async Task<ActionResult<PhoneBookEntry>> PostPhoneEntry(PhoneBookEntry entry)
	{
		_context.PhoneBookEntries.Add(entry);
		await _context.SaveChangesAsync();

		return CreatedAtAction(nameof(PostPhoneEntry), new { id = entry.PhoneBookEntryId }, entry);
	}

	// DELETE: api/PhoneBookEntries/5
	[HttpDelete("{id}")]
	public async Task<IActionResult> DeletePhoneEntry(int id)
	{
		var entryToDelete = await _context.PhoneBookEntries.FindAsync(id);

		if (entryToDelete == null) { return NotFound(); }

		_context.PhoneBookEntries.Remove(entryToDelete);
		await _context.SaveChangesAsync();

		return NoContent();
	}

	private bool PhoneBookEntryExists(int id)
	{
		return _context.PhoneBookEntries.Any(x => x.PhoneBookEntryId == id);
	}
}