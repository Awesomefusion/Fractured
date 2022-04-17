using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Skills;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    public class SkillsController : BaseApiController
    {
        private readonly IMediator _mediator;
        public SkillsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Skill>>> GetSkills()
        {
            return await _mediator.Send(new List.Query());
        }
    }
}