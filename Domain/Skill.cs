using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Skill
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string School { get; set; }
        public string Description { get; set; }
        public string Requirements { get; set; }
        public string Cooldown { get; set; }
        public string Image { get; set; }
    }
}