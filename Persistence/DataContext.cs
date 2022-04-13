using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Persistence
{
    public class DataContext : DbContext
    {
         public DataContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Skill> Skills { get; set; }
    }
}