using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Skills.Any()) return;

            var skills = new List<Skill>
            {
                new Skill
                {
                    Title = "Absorb Elements",
                    School = "Abjuration",
                    Description = "You surround yourself with a magical protection that absorbs [INT*2]% of all the Fire/Ice/Shock damage you receive, half of which is then converted into Mana.",
                    Image = "C:/Code/Fractured/Assets/Icons/Icon_Absorb.webp",
                    Requirements = "Allowed Weapons: Spell Channeling, Allowed Armor: Light, Mana Cost: 300 + (30/s)",
                    Cooldown = "10s",
                },
                new Skill
                {
                    Title = "Dispel Magic",
                    School = "Abjuration",
                    Description = "You attempt to dispel all magical buffs, debuffs and protections from all the creatures within a 3-meter radius area of your choice. For each effect, you have a [INT*3]% chance to dispel it, but the recipient is allowed a Willpower Save to keep it if it was a buff or a protection.",
                    Image = "C:/Code/Fractured/Assets/Icons/Icon_DispelMagic.webp",
                    Requirements = "Allowed Weapons: Spell Channeling, Allowed Armor: Any, Mana Cost: 400",
                    Cooldown = "10s",
                },
                new Skill
                {
                    Title = "Globe of Spell Protection",
                    School = "Abjuration",
                    Description = "This globe completely blocks the effects of any single-targeted spell.",
                    Image = "C:/Code/Fractured/Assets/Icons/Icon_GlobeOfSpellProtection.webp",
                    Requirements = "Allowed Weapons: Unarmed Spell Channeling, Allowed Armor: Any, Mana Cost: 300 + (30/s)",
                    Cooldown = "10s",
                },
            };

            await context.Skills.AddRangeAsync(skills);
            await context.SaveChangesAsync();
        }
    }
}