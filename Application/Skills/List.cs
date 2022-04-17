using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Skills
{
    public class List
    {
        public class Query : IRequest<List<Skill>> 
        {

        }

        public class Handler : IRequestHandler<Query, List<Skill>>
        {
        public DataContext _context { get; }
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Skill>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Skills.ToListAsync();
            }
        }
    }
}